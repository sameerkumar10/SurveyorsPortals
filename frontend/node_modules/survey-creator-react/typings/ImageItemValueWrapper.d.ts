/// <reference types="react" />
import { ImageItemValueWrapperViewModel } from "survey-creator-core";
import { QuestionSelectBase, Base, ImageItemValue, QuestionImagePickerModel } from "survey-core";
import { CreatorModelElement } from "./ModelElement";
interface ImageItemValueAdornerComponentProps {
    element: JSX.Element;
    componentData: any;
    question: QuestionSelectBase;
    item: ImageItemValue;
}
export declare class ImageItemValueAdornerComponent extends CreatorModelElement<ImageItemValueAdornerComponentProps, any> {
    model: ImageItemValueWrapperViewModel;
    private rootRef;
    constructor(props: ImageItemValueAdornerComponentProps);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    protected get question(): QuestionImagePickerModel;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    preventDragHandler: (e: any) => void;
    renderLoadingIndicator(): JSX.Element;
    render(): JSX.Element;
}
export {};
