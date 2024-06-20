/// <reference types="react" />
import { ISurveyCreatorToolboxProps, Toolbox } from "./Toolbox";
export declare class AdaptiveToolbox extends Toolbox {
    private manager;
    private rootRef;
    constructor(props: ISurveyCreatorToolboxProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
