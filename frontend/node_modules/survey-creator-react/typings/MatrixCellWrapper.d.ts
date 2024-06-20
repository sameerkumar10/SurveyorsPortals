/// <reference types="react" />
import { QuestionSelectBase, Base } from "survey-core";
import { MatrixCellWrapperViewModel } from "survey-creator-core";
import { CreatorModelElement } from "./ModelElement";
interface MatrixCellAdornerComponentProps {
    element: JSX.Element;
    componentData: any;
    question: QuestionSelectBase;
    cell: any;
}
export declare class MatrixCellAdornerComponent extends CreatorModelElement<MatrixCellAdornerComponentProps, any> {
    model: MatrixCellWrapperViewModel;
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    componentDidUpdate(prevProps: any, prevState: any): void;
    protected getStateElement(): Base;
    render(): JSX.Element;
}
export {};
