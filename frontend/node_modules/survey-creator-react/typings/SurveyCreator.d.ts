/// <reference types="react" />
import { Base, Question, SurveyError } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
import { ICreatorOptions, SurveyCreatorModel, ITabbedMenuItem } from "survey-creator-core";
interface ISurveyCreatorComponentProps {
    creator: SurveyCreator;
    style?: any;
}
export declare class SurveyCreatorComponent extends SurveyElementBase<ISurveyCreatorComponentProps, any> {
    constructor(props: ISurveyCreatorComponentProps);
    get creator(): SurveyCreatorModel;
    protected getStateElement(): Base;
    get style(): any;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private rootNode;
    renderElement(): JSX.Element;
    renderActiveTab(): JSX.Element;
    renderCreatorTab(tab: ITabbedMenuItem): JSX.Element;
    renderSidebar(): JSX.Element;
}
export declare class SurveyCreator extends SurveyCreatorModel {
    constructor(options?: ICreatorOptions, options2?: ICreatorOptions);
    render(target: string | HTMLElement): void;
    createQuestionElement(question: Question): JSX.Element;
    renderError(key: string, error: SurveyError, cssClasses: any): JSX.Element;
    questionTitleLocation(): string;
    questionErrorLocation(): string;
}
export {};
