import { ActionContainer, Base, Question, SurveyModel } from "survey-core";
export declare class SearchManager extends Base {
    private highlightedEditorClass;
    private currentMatchIndex;
    private currentMatch;
    searchActionBar: ActionContainer;
    filterStringPlaceholder: string;
    propertyGridNoResultsFound: string;
    survey: SurveyModel;
    isVisible: boolean;
    filterString: string;
    matchCounterText: string;
    allMatches: Array<Question>;
    private expandAllParents;
    private switchHighlightedEditor;
    private updatedMatchCounterText;
    private navigateToEditor;
    private getAllMatches;
    private setFiterString;
    private reset;
    initActionBar(): void;
    constructor();
    setSurvey(newSurvey: SurveyModel): void;
    clearFilterString(): void;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    dispose(): void;
}
