import { Base, SurveyTemplateRendererTemplateData, QuestionRowModel } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
export declare class RowViewModel extends Base {
    creator: SurveyCreatorModel;
    row: QuestionRowModel;
    templateData: SurveyTemplateRendererTemplateData;
    constructor(creator: SurveyCreatorModel, row: QuestionRowModel, templateData: SurveyTemplateRendererTemplateData);
    get cssClasses(): string;
}
