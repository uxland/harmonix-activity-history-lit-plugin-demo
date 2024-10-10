import { PrimariaApi, shellRegions  } from "@uxland/primary-shell";
import './plugin-header';
import { executeInjectHistoryItemsTask } from "./activity-history-actions";
import { html } from "lit";
import { PluginHeader } from "./plugin-header";

export const initialize = (api: PrimariaApi) => {
    console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
    api.regionManager.registerView(shellRegions.headerRightActions,{
        id: api.pluginInfo.pluginId,
        //factory: () => Promise.resolve(html`<plugin-header api=${api}></plugin-header>`),
        factory: () => Promise.resolve(new PluginHeader(api)),
    });
    executeInjectHistoryItemsTask(api);

    return Promise.resolve();
};
export const dispose = (api: PrimariaApi) => {
    console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
    api.regionManager.removeView(shellRegions.headerRightActions, "activity-history-view");
    Promise.resolve();
}