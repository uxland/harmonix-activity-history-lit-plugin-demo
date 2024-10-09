import { PrimariaApi } from "@uxland/primary-shell";
import { mockActivityHistoryItem } from "./mock";
import { html } from "lit";

export const bootstrapFeatures = (api: PrimariaApi) => {
    setTimeout(() => {
        executeInjectHistoryItemsTask(api);
      }, 1000);
}

export const executeInjectHistoryItemsTask = (api: PrimariaApi) => {
    import("./plugin-history-item");
    const payload = {
      entityId: "activity-history-lit-plugin",
      asyncTask: async (): Promise<any[]> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([mockActivityHistoryItem]);
          }, 1000);
        });
      },
    //   mapFn: mapCcToHistoryItem,
      componentFactory: (item: unknown) => {
        return html`<plugin-history-item .item=${item}></plugin-history-item>`;
      },
      errorMessage: "Error plugin demo",
    };
    api.broker.send("inject_async_history_items_request", payload);
  };