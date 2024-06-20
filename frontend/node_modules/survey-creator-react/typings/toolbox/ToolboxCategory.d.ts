/// <reference types="react" />
import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
import { QuestionToolbox, QuestionToolboxCategory } from "survey-creator-core";
export interface ISurveyCreatorToolboxCategoryProps {
    category: QuestionToolboxCategory;
    toolbox: QuestionToolbox;
}
export declare class SurveyCreatorToolboxCategory extends SurveyElementBase<ISurveyCreatorToolboxCategoryProps, any> {
    get category(): QuestionToolboxCategory;
    get toolbox(): QuestionToolbox;
    get class(): string;
    protected getStateElement(): Base;
    render(): JSX.Element;
    renderCategoryHeader(): JSX.Element;
    renderButton(): JSX.Element;
    protected renderCategoryContent(): Array<any>;
    renderItems(items: Array<any>, isCompact?: boolean): JSX.Element[];
}
