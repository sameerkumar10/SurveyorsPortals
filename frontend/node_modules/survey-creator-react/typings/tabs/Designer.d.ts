/// <reference types="react" />
import { Base, PageModel } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
import { SurveyCreatorModel, TabDesignerViewModel } from "survey-creator-core";
interface ITabDesignerComponentProps {
    data: TabDesignerViewModel;
}
export declare class TabDesignerComponent extends SurveyElementBase<ITabDesignerComponentProps, any> {
    private get model();
    protected get creator(): SurveyCreatorModel;
    private denyUpdate;
    private allowUpdate;
    private addDragDropEvents;
    private clearDragDropEvents;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected getStateElements(): Array<Base>;
    private renderedPagesCache;
    protected getRenderedPages(): JSX.Element[];
    protected createRenderedPage(page: PageModel, index: number, isGhostPage?: boolean): any;
    private renderNewPage;
    protected renderPage(pageV: PageModel): JSX.Element;
    renderElement(): JSX.Element;
    renderHeader(condition: boolean): JSX.Element;
    renderPlaceHolder(): JSX.Element;
    renderPlaceHolderContent(): JSX.Element;
    renderTabContent(): JSX.Element;
}
export {};
