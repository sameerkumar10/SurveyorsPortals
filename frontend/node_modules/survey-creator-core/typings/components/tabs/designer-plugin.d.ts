import { Base, Action } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { PropertyGridViewModel } from "../../property-grid/property-grid-view-model";
import { TabDesignerViewModel } from "./designer";
export declare class TabDesignerPlugin implements ICreatorPlugin {
    private creator;
    model: TabDesignerViewModel;
    propertyGrid: PropertyGridViewModel;
    private propertyGridTab;
    private toolboxTab;
    private surveySettingsAction;
    private saveSurveyAction;
    previewAction: Action;
    private designerAction;
    private get isSurveySelected();
    private get isSettingsActive();
    private createVisibleUpdater;
    constructor(creator: SurveyCreatorModel);
    activate(): void;
    deactivate(): boolean;
    onDesignerSurveyPropertyChanged(obj: Base, propName: string): void;
    update(): void;
    createActions(): Action[];
    selectSurvey(): void;
    addFooterActions(): void;
}
