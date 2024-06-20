/// <reference types="react" />
import { Base } from "survey-core";
import { CreatorModelElement } from "./ModelElement";
export declare class SurveyLocStringEditor extends CreatorModelElement<any, any> {
    private baseModel;
    private svStringEditorRef;
    constructor(props: any);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    private get locString();
    private get creator();
    private get style();
    protected getStateElement(): Base;
    get errorText(): string;
    private onChangedHandler;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    private get placeholder();
    private get contentEditable();
    private onBlur;
    private onCompositionStart;
    private onCompositionEnd;
    private onInput;
    private onPaste;
    private justFocused;
    private onFocus;
    private onKeyDown;
    private onKeyUp;
    private onMouseUp;
    private done;
    private edit;
    private get className();
    render(): JSX.Element;
}
