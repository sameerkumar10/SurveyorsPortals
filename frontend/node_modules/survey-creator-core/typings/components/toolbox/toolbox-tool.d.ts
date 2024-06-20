import { Base } from "survey-core";
import { IQuestionToolboxItem } from "../../toolbox";
import { SurveyCreatorModel } from "../../creator-base";
export declare class ToolboxToolViewModel extends Base {
    protected item: IQuestionToolboxItem;
    protected creator: SurveyCreatorModel;
    private dragOrClickHelper;
    constructor(item: IQuestionToolboxItem, creator: SurveyCreatorModel);
    click: (event: any) => void;
    get allowAdd(): boolean;
    onPointerDown(pointerDownEvent: any): boolean;
    private _node;
    private onPointerUp;
    private startDragToolboxItem;
    private get dragDropHelper();
}
