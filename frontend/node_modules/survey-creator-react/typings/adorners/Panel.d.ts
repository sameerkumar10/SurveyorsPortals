/// <reference types="react" />
import { QuestionAdornerComponent } from "./Question";
export declare class PanelAdornerComponent extends QuestionAdornerComponent {
    renderElementPlaceholder(): JSX.Element;
    protected disableTabStop(): boolean;
    protected renderFooter(): JSX.Element;
}
