/// <reference types="react" />
import { ItemValueWrapperViewModel } from "survey-creator-core";
import { QuestionSelectBase, Base, ItemValue } from "survey-core";
import { CreatorModelElement } from "./ModelElement";
interface ItemValueAdornerComponentProps {
    element: JSX.Element;
    componentData: any;
    question: QuestionSelectBase;
    item: ItemValue;
}
export declare class ItemValueAdornerComponent extends CreatorModelElement<ItemValueAdornerComponentProps, any> {
    model: ItemValueWrapperViewModel;
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    private onBlur;
    render(): JSX.Element;
}
export {};
