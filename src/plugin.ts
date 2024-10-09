import { PrimariaApi, shellRegions  } from "@uxland/primary-shell";
import { PluginHeader } from "./plugin-header";
import { executeInjectHistoryItemsTask } from "./activity-history-actions";

export const initialize = (api: PrimariaApi) => {
    console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
    api.regionManager.registerView(shellRegions.headerRightActions,{
        id: "plugin-header",
        factory: () => Promise.resolve(new PluginHeader(api))
    });
    executeInjectHistoryItemsTask(api);

    return Promise.resolve();
};
export const dispose = (api: PrimariaApi) => {
    console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
    api.regionManager.removeView(shellRegions.main, "activity-history-view");
    api.regionManager.removeView(shellRegions.navigationMenu, "activity-history-quick-action");
    Promise.resolve();
}