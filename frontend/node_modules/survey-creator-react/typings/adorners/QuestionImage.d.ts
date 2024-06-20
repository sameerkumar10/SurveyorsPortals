/// <reference types="react" />
import { QuestionImageAdornerViewModel, QuestionAdornerViewModel } from "survey-creator-core";
import { QuestionAdornerComponent, QuestionAdornerComponentProps } from "./Question";
import { Base } from "survey-core";
export declare class QuestionImageAdornerComponent extends QuestionAdornerComponent {
    constructor(props: QuestionAdornerComponentProps);
    protected createQuestionViewModel(props: any): QuestionAdornerViewModel;
    get imageModel(): QuestionImageAdornerViewModel;
    componentDidMount(): void;
    protected renderHeader(): JSX.Element;
    renderLoadingPlaceholder(): JSX.Element;
    renderChooseButton(): JSX.Element;
    renderElementPlaceholder(): JSX.Element;
    protected getStateElements(): Array<Base>;
    protected renderElementContent(): JSX.Element;
}
