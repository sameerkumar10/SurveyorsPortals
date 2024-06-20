import { Base, SurveyModel, Action } from "survey-core";
import { PropertyGridModel } from "./index";
import { SurveyCreatorModel } from "../creator-base";
import { SearchManager } from "./search-manager";
export declare class PropertyGridViewModel extends Base {
    private propertyGridModel;
    private creator;
    nextSelectionAction: Action;
    prevSelectionAction: Action;
    objectSelectionAction: Action;
    searchManager: SearchManager;
    private selectorPopupModel;
    hasPrev: boolean;
    hasNext: boolean;
    survey: SurveyModel;
    selectedElementName: string;
    searchEnabled: boolean;
    constructor(propertyGridModel: PropertyGridModel, creator: SurveyCreatorModel);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    private get selectionController();
    private onSurveyChanged;
    private updateTitle;
    private getTitle;
    private getSelectedObj;
    private initActions;
    dispose(): void;
}
