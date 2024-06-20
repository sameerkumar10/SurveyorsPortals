/// <reference types="react" />
import { QuestionAdornerViewModel } from "survey-creator-core";
import { Base } from "survey-core";
import { QuestionAdornerComponentProps } from "./Question";
import { CreatorModelElement } from "../ModelElement";
export declare class CellQuestionDropdownAdornerComponent extends CreatorModelElement<QuestionAdornerComponentProps, any> {
    model: QuestionAdornerViewModel;
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    render(): JSX.Element;
}
