/// <reference types="react" />
import { Switcher } from "survey-creator-core";
import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
interface ISwitcherComponentProps {
    item: Switcher;
}
export declare class SwitcherComponent extends SurveyElementBase<ISwitcherComponentProps, any> {
    get item(): Switcher;
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
}
export default SwitcherComponent;
