/// <reference types="react" />
import { Base, PageModel, SurveyModel } from "survey-core";
import { CreatorModelElement } from "../ModelElement";
import { SurveyCreatorModel } from "survey-creator-core";
interface ICreatorSurveyPageComponentProps {
    creator: SurveyCreatorModel;
    survey: SurveyModel;
    page: PageModel;
}
export declare class CreatorSurveyPageComponent extends CreatorModelElement<ICreatorSurveyPageComponentProps, any> {
    private model;
    private rootRef;
    constructor(props: ICreatorSurveyPageComponentProps);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected canRender(): boolean;
    renderElement(): JSX.Element;
    protected renderPlaceholder(): JSX.Element;
    protected renderContent(): JSX.Element;
    protected renderHeader(): JSX.Element;
    protected renderFooter(): JSX.Element;
}
export {};
