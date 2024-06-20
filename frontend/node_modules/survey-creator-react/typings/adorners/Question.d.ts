import { QuestionAdornerViewModel } from "survey-creator-core";
import React from "react";
import { Base, Question } from "survey-core";
import { CreatorModelElement } from "../ModelElement";
export interface QuestionAdornerComponentProps {
    element: JSX.Element;
    question: Question;
    componentData: any;
}
export declare class QuestionAdornerComponent extends CreatorModelElement<QuestionAdornerComponentProps, any> {
    private modelValue;
    protected rootRef: React.RefObject<HTMLDivElement>;
    protected createModel(props: any): void;
    protected createQuestionViewModel(props: any): QuestionAdornerViewModel;
    protected getUpdatedModelProps(): string[];
    get model(): QuestionAdornerViewModel;
    protected getStateElement(): Base;
    protected canRender(): boolean;
    renderElement(): JSX.Element;
    protected disableTabStop(): boolean;
    protected renderContent(allowInteractions: boolean): JSX.Element;
    protected renderHeader(): JSX.Element;
    protected renderFooter(): JSX.Element;
    protected renderCarryForwardBanner(): JSX.Element;
    protected renderElementContent(): JSX.Element;
    renderElementPlaceholder(): JSX.Element;
}
