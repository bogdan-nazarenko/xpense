const dialogData = {
  triggerConfigs: new WeakMap(),
  dialogConfigs: new WeakMap(),
};

export const dialogImpl = {
  showDialog() {
    this.dialog.showModal();
  },

  closeDialog(event) {
    const target = event.target;
    const dialog = event.currentTarget;

    if (target === dialog || target.classList.contains("modal__close-button")) {
      dialog.close();
    }
  },

  init(trigger, dialog) {
    const handler = {
      dialog,
      handleEvent: this.showDialog,
    };

    trigger.addEventListener("click", handler);

    if (!dialogData.dialogConfigs.has(dialog)) {
      const config = {
        dialog,
        triggers: new Set(),
      };

      dialog.addEventListener("click", this.closeDialog);

      dialogData.dialogConfigs.set(dialog, config);
    }

    dialogData.dialogConfigs.get(dialog).triggers.add(trigger);
    dialogData.triggerConfigs.set(trigger, handler);
  },

  disable(trigger) {
    const handler = dialogData.triggerConfigs.get(trigger);
    const dialogConfig = dialogData.dialogConfigs.get(handler.dialog);

    trigger.removeEventListener("click", handler);

    dialogData.triggerConfigs.delete(trigger);
    dialogConfig.triggers.delete(trigger);

    if (dialogConfig.triggers.size === 0) {
      handler.dialog.removeEventListener("click", this.closeDialog);

      dialogData.dialogConfigs.delete(handler.dialog);
    }
  },
};
