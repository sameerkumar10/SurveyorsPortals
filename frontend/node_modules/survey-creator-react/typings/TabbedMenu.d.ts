/// <reference types="react" />
import { TabbedMenuContainer } from "survey-creator-core";
import { Base, Action } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
export interface ITabbedMenuComponentProps {
    model: TabbedMenuContainer;
}
export declare class TabbedMenuComponent extends SurveyElementBase<ITabbedMenuComponentProps, any> {
    private manager;
    private rootRef;
    private get model();
    protected getStateElement(): Base;
    constructor(props: any);
    renderElement(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export interface ITabbedMenuItemComponentProps {
    item: Action;
}
export declare class TabbedMenuItemComponent extends SurveyElementBase<ITabbedMenuItemComponentProps, any> {
    get item(): Action;
    protected getStateElement(): Base;
    render(): JSX.Element;
}
export default TabbedMenuComponent;
