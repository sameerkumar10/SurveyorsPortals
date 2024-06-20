/// <reference types="react" />
import { Base } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";
import { CreatorModelElement } from "./ModelElement";
interface ILogoImageComponentProps {
    data: SurveyCreatorModel;
}
export declare class LogoImageComponent extends CreatorModelElement<ILogoImageComponentProps, any> {
    private model;
    private rootRef;
    constructor(props: ILogoImageComponentProps);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    componentDidMount(): void;
    renderChooseButton(): JSX.Element;
    renderClearButton(): JSX.Element;
    renderButtons(): JSX.Element;
    renderImage(): JSX.Element;
    renderPlaceHolder(): JSX.Element;
    renderInput(): JSX.Element;
    renderLoadingIndicator(): JSX.Element;
    render(): JSX.Element;
}
export {};
