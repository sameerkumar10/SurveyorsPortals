/// <reference types="react" />
import { SurveyCreatorModel, IQuestionToolboxItem } from "survey-creator-core";
import { ToolboxToolViewModel } from "survey-creator-core";
import { Base } from "survey-core";
import { CreatorModelElement } from "../ModelElement";
export interface ISurveyCreatorToolboxItemProps {
    item: IQuestionToolboxItem;
    creator: SurveyCreatorModel;
    isCompact: boolean;
}
export declare class SurveyCreatorToolboxTool extends CreatorModelElement<ISurveyCreatorToolboxItemProps, any> {
    model: ToolboxToolViewModel;
    constructor(props: any);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    get item(): IQuestionToolboxItem;
    get creator(): SurveyCreatorModel;
    get isCompact(): boolean;
    protected getStateElement(): Base;
    render(): JSX.Element;
}
export declare class SurveyCreatorToolboxItem extends CreatorModelElement<ISurveyCreatorToolboxItemProps, any> {
    model: ToolboxToolViewModel;
    constructor(props: any);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    get item(): IQuestionToolboxItem;
    get creator(): SurveyCreatorModel;
    protected getStateElement(): Base;
    render(): JSX.Element;
}
