/// <reference types="react" />
import { RowViewModel } from "survey-creator-core";
import { Base, QuestionRowModel } from "survey-core";
import { CreatorModelElement } from "../ModelElement";
interface RowWrapperComponentProps {
    element: JSX.Element;
    componentData: any;
    row: QuestionRowModel;
}
export declare class RowWrapper extends CreatorModelElement<RowWrapperComponentProps, any> {
    model: RowViewModel;
    constructor(props: RowWrapperComponentProps);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    render(): JSX.Element;
}
export {};
