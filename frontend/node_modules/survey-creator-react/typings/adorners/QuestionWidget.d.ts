/// <reference types="react" />
import { QuestionAdornerViewModel } from "survey-creator-core";
import { QuestionAdornerComponent } from "./Question";
export declare class QuestionWidgetAdornerComponent extends QuestionAdornerComponent {
    protected createQuestionViewModel(props: any): QuestionAdornerViewModel;
    get widgetModel(): QuestionAdornerViewModel;
    protected renderElementContent(): JSX.Element;
}
