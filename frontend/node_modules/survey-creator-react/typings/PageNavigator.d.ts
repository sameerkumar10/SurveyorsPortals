/// <reference types="react" />
import { Base } from "survey-core";
import { PagesController } from "survey-creator-core";
import { CreatorModelElement } from "./ModelElement";
interface ISurveyPageNavigatorProps {
    pagesController: PagesController;
    pageEditMode: string;
}
export declare class SurveyPageNavigator extends CreatorModelElement<ISurveyPageNavigatorProps, any> {
    private model;
    private containerRef;
    constructor(props: ISurveyPageNavigatorProps);
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    private get scrollableContainer();
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderElement(): JSX.Element;
}
export declare class SurveyPageNavigatorItem extends CreatorModelElement<any, any> {
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
}
export {};
