import { PrimariaApi } from "@uxland/primary-shell";
import { mockActivityHistoryItem } from "./mock";
import { html } from "lit";

export const executeInjectHistoryItemsTask = (api: PrimariaApi) => {
    import("./plugin-history-item");
    const payload = {
      entityId: api.pluginInfo.pluginId,
      asyncTask: async (): Promise<any[]> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([mockActivityHistoryItem]);
          }, 1000);
        });
      },
      mapFn: (item)=> item,
      componentFactory: (item: unknown) => {
        return html`<plugin-history-item .item=${item}></plugin-history-item>`;
      },
      errorMessage: "Error plugin demo",
    };
    api.broker.send("inject_async_history_items_request", payload);
};
  
export const addItem = (api: PrimariaApi) => { 
  const newItem = {...mockActivityHistoryItem, id: Math.random().toString()}
  return api.broker.send("add_history_item_request", {entityId: api.pluginInfo.pluginId, item: newItem})
}

export const updateItem = (api: PrimariaApi) => { 
  const newItem = {...mockActivityHistoryItem, date: new Date('2024-12-05T10:00:00Z').toString()}
  return api.broker.send("update_history_item_request", {entityId: api.pluginInfo.pluginId, item: newItem})
}