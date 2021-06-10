declare let MonacoEnvironment: monaco.Environment | undefined;
declare namespace monaco {
    export type Thenable<T> = PromiseLike<T>;
    export interface Environment {
        globalAPI?: boolean;
        baseUrl?: string;
        getWorker?(workerId: string, label: string): Worker;
        getWorkerUrl?(workerId: string, label: string): string;
    }
    export interface IDisposable {
        dispose(): void;
    }
    export interface IEvent<T> {
        (listener: (e: T) => any, thisArg?: any): IDisposable;
    }
    export class Emitter<T> {
        constructor();
        readonly event: IEvent<T>;
        fire(event: T): void;
        dispose(): void;
    }
    export enum MarkerTag {
        Unnecessary = 1,
        Deprecated = 2
    }
    export enum MarkerSeverity {
        Hint = 1,
        Info = 2,
        Warning = 4,
        Error = 8
    }
    export class CancellationTokenSource {
        constructor(parent?: CancellationToken);
        get token(): CancellationToken;
        cancel(): void;
        dispose(cancel?: boolean): void;
    }
    export interface CancellationToken {
        readonly isCancellationRequested: boolean;
        readonly onCancellationRequested: (listener: (e: any) => any, thisArgs?: any, disposables?: IDisposable[]) => IDisposable;
    }
    export class Uri implements UriComponents {
        static isUri(thing: any): thing is Uri;
        readonly scheme: string;
        readonly authority: string;
        readonly path: string;
        readonly query: string;
        readonly fragment: string;
        get fsPath(): string;
        with(change: {
            scheme?: string;
            authority?: string | null;
            path?: string | null;
            query?: string | null;
            fragment?: string | null;
        }): Uri;
        static parse(value: string, _strict?: boolean): Uri;
        static file(path: string): Uri;
        static from(components: {
            scheme: string;
            authority?: string;
            path?: string;
            query?: string;
            fragment?: string;
        }): Uri;
        static joinPath(uri: Uri, ...pathFragment: string[]): Uri;
        toString(skipEncoding?: boolean): string;
        toJSON(): UriComponents;
        static revive(data: UriComponents | Uri): Uri;
        static revive(data: UriComponents | Uri | undefined): Uri | undefined;
        static revive(data: UriComponents | Uri | null): Uri | null;
        static revive(data: UriComponents | Uri | undefined | null): Uri | undefined | null;
    }
    export interface UriComponents {
        scheme: string;
        authority: string;
        path: string;
        query: string;
        fragment: string;
    }
    export enum KeyCode {
        DependsOnKbLayout = -1,
        Unknown = 0,
        Backspace = 1,
        Tab = 2,
        Enter = 3,
        Shift = 4,
        Ctrl = 5,
        Alt = 6,
        PauseBreak = 7,
        CapsLock = 8,
        Escape = 9,
        Space = 10,
        PageUp = 11,
        PageDown = 12,
        End = 13,
        Home = 14,
        LeftArrow = 15,
        UpArrow = 16,
        RightArrow = 17,
        DownArrow = 18,
        Insert = 19,
        Delete = 20,
        KEY_0 = 21,
        KEY_1 = 22,
        KEY_2 = 23,
        KEY_3 = 24,
        KEY_4 = 25,
        KEY_5 = 26,
        KEY_6 = 27,
        KEY_7 = 28,
        KEY_8 = 29,
        KEY_9 = 30,
        KEY_A = 31,
        KEY_B = 32,
        KEY_C = 33,
        KEY_D = 34,
        KEY_E = 35,
        KEY_F = 36,
        KEY_G = 37,
        KEY_H = 38,
        KEY_I = 39,
        KEY_J = 40,
        KEY_K = 41,
        KEY_L = 42,
        KEY_M = 43,
        KEY_N = 44,
        KEY_O = 45,
        KEY_P = 46,
        KEY_Q = 47,
        KEY_R = 48,
        KEY_S = 49,
        KEY_T = 50,
        KEY_U = 51,
        KEY_V = 52,
        KEY_W = 53,
        KEY_X = 54,
        KEY_Y = 55,
        KEY_Z = 56,
        Meta = 57,
        ContextMenu = 58,
        F1 = 59,
        F2 = 60,
        F3 = 61,
        F4 = 62,
        F5 = 63,
        F6 = 64,
        F7 = 65,
        F8 = 66,
        F9 = 67,
        F10 = 68,
        F11 = 69,
        F12 = 70,
        F13 = 71,
        F14 = 72,
        F15 = 73,
        F16 = 74,
        F17 = 75,
        F18 = 76,
        F19 = 77,
        NumLock = 78,
        ScrollLock = 79,
        US_SEMICOLON = 80,
        US_EQUAL = 81,
        US_COMMA = 82,
        US_MINUS = 83,
        US_DOT = 84,
        US_SLASH = 85,
        US_BACKTICK = 86,
        US_OPEN_SQUARE_BRACKET = 87,
        US_BACKSLASH = 88,
        US_CLOSE_SQUARE_BRACKET = 89,
        US_QUOTE = 90,
        OEM_8 = 91,
        OEM_102 = 92,
        NUMPAD_0 = 93,
        NUMPAD_1 = 94,
        NUMPAD_2 = 95,
        NUMPAD_3 = 96,
        NUMPAD_4 = 97,
        NUMPAD_5 = 98,
        NUMPAD_6 = 99,
        NUMPAD_7 = 100,
        NUMPAD_8 = 101,
        NUMPAD_9 = 102,
        NUMPAD_MULTIPLY = 103,
        NUMPAD_ADD = 104,
        NUMPAD_SEPARATOR = 105,
        NUMPAD_SUBTRACT = 106,
        NUMPAD_DECIMAL = 107,
        NUMPAD_DIVIDE = 108,
        KEY_IN_COMPOSITION = 109,
        ABNT_C1 = 110,
        ABNT_C2 = 111,
        MAX_VALUE = 112
    }
    export class KeyMod {
        static readonly CtrlCmd: number;
        static readonly Shift: number;
        static readonly Alt: number;
        static readonly WinCtrl: number;
        static chord(firstPart: number, secondPart: number): number;
    }
    export interface IMarkdownString {
        readonly value: string;
        readonly isTrusted?: boolean;
        readonly supportThemeIcons?: boolean;
        uris?: {
            [href: string]: UriComponents;
        };
    }
    export interface IKeyboardEvent {
        readonly _standardKeyboardEventBrand: true;
        readonly browserEvent: KeyboardEvent;
        readonly target: HTMLElement;
        readonly ctrlKey: boolean;
        readonly shiftKey: boolean;
        readonly altKey: boolean;
        readonly metaKey: boolean;
        readonly keyCode: KeyCode;
        readonly code: string;
        equals(keybinding: number): boolean;
        preventDefault(): void;
        stopPropagation(): void;
    }
    export interface IMouseEvent {
        readonly browserEvent: MouseEvent;
        readonly leftButton: boolean;
        readonly middleButton: boolean;
        readonly rightButton: boolean;
        readonly buttons: number;
        readonly target: HTMLElement;
        readonly detail: number;
        readonly posx: number;
        readonly posy: number;
        readonly ctrlKey: boolean;
        readonly shiftKey: boolean;
        readonly altKey: boolean;
        readonly metaKey: boolean;
        readonly timestamp: number;
        preventDefault(): void;
        stopPropagation(): void;
    }
    export interface IScrollEvent {
        readonly scrollTop: number;
        readonly scrollLeft: number;
        readonly scrollWidth: number;
        readonly scrollHeight: number;
        readonly scrollTopChanged: boolean;
        readonly scrollLeftChanged: boolean;
        readonly scrollWidthChanged: boolean;
        readonly scrollHeightChanged: boolean;
    }
    export interface IPosition {
        readonly lineNumber: number;
        readonly column: number;
    }
    export class Position {
        readonly lineNumber: number;
        readonly column: number;
        constructor(lineNumber: number, column: number);
        with(newLineNumber?: number, newColumn?: number): Position;
        delta(deltaLineNumber?: number, deltaColumn?: number): Position;
        equals(other: IPosition): boolean;
        static equals(a: IPosition | null, b: IPosition | null): boolean;
        isBefore(other: IPosition): boolean;
        static isBefore(a: IPosition, b: IPosition): boolean;
        isBeforeOrEqual(other: IPosition): boolean;
        static isBeforeOrEqual(a: IPosition, b: IPosition): boolean;
        static compare(a: IPosition, b: IPosition): number;
        clone(): Position;
        toString(): string;
        static lift(pos: IPosition): Position;
        static isIPosition(obj: any): obj is IPosition;
    }
    export interface IRange {
        readonly startLineNumber: number;
        readonly startColumn: number;
        readonly endLineNumber: number;
        readonly endColumn: number;
    }
    export class Range {
        readonly startLineNumber: number;
        readonly startColumn: number;
        readonly endLineNumber: number;
        readonly endColumn: number;
        constructor(startLineNumber: number, startColumn: number, endLineNumber: number, endColumn: number);
        isEmpty(): boolean;
        static isEmpty(range: IRange): boolean;
        containsPosition(position: IPosition): boolean;
        static containsPosition(range: IRange, position: IPosition): boolean;
        containsRange(range: IRange): boolean;
        static containsRange(range: IRange, otherRange: IRange): boolean;
        strictContainsRange(range: IRange): boolean;
        static strictContainsRange(range: IRange, otherRange: IRange): boolean;
        plusRange(range: IRange): Range;
        static plusRange(a: IRange, b: IRange): Range;
        intersectRanges(range: IRange): Range | null;
        static intersectRanges(a: IRange, b: IRange): Range | null;
        equalsRange(other: IRange | null): boolean;
        static equalsRange(a: IRange | null, b: IRange | null): boolean;
        getEndPosition(): Position;
        static getEndPosition(range: IRange): Position;
        getStartPosition(): Position;
        static getStartPosition(range: IRange): Position;
        toString(): string;
        setEndPosition(endLineNumber: number, endColumn: number): Range;
        setStartPosition(startLineNumber: number, startColumn: number): Range;
        collapseToStart(): Range;
        static collapseToStart(range: IRange): Range;
        static fromPositions(start: IPosition, end?: IPosition): Range;
        static lift(range: undefined | null): null;
        static lift(range: IRange): Range;
        static isIRange(obj: any): obj is IRange;
        static areIntersectingOrTouching(a: IRange, b: IRange): boolean;
        static areIntersecting(a: IRange, b: IRange): boolean;
        static compareRangesUsingStarts(a: IRange | null | undefined, b: IRange | null | undefined): number;
        static compareRangesUsingEnds(a: IRange, b: IRange): number;
        static spansMultipleLines(range: IRange): boolean;
    }
    export interface ISelection {
        readonly selectionStartLineNumber: number;
        readonly selectionStartColumn: number;
        readonly positionLineNumber: number;
        readonly positionColumn: number;
    }
    export class Selection extends Range {
        readonly selectionStartLineNumber: number;
        readonly selectionStartColumn: number;
        readonly positionLineNumber: number;
        readonly positionColumn: number;
        constructor(selectionStartLineNumber: number, selectionStartColumn: number, positionLineNumber: number, positionColumn: number);
        toString(): string;
        equalsSelection(other: ISelection): boolean;
        static selectionsEqual(a: ISelection, b: ISelection): boolean;
        getDirection(): SelectionDirection;
        setEndPosition(endLineNumber: number, endColumn: number): Selection;
        getPosition(): Position;
        setStartPosition(startLineNumber: number, startColumn: number): Selection;
        static fromPositions(start: IPosition, end?: IPosition): Selection;
        static liftSelection(sel: ISelection): Selection;
        static selectionsArrEqual(a: ISelection[], b: ISelection[]): boolean;
        static isISelection(obj: any): obj is ISelection;
        static createWithDirection(startLineNumber: number, startColumn: number, endLineNumber: number, endColumn: number, direction: SelectionDirection): Selection;
    }
    export enum SelectionDirection {
        LTR = 0,
        RTL = 1
    }
    export class Token {
        _tokenBrand: void;
        readonly offset: number;
        readonly type: string;
        readonly language: string;
        constructor(offset: number, type: string, language: string);
        toString(): string;
    }
}
declare namespace monaco.editor {
    export interface IDiffNavigator {
        canNavigate(): boolean;
        next(): void;
        previous(): void;
        dispose(): void;
    }
    export function create(domElement: HTMLElement, options?: IStandaloneEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneCodeEditor;
    export function onDidCreateEditor(listener: (codeEditor: ICodeEditor) => void): IDisposable;
    export function createDiffEditor(domElement: HTMLElement, options?: IDiffEditorConstructionOptions, override?: IEditorOverrideServices): IStandaloneDiffEditor;
    export interface IDiffNavigatorOptions {
        readonly followsCaret?: boolean;
        readonly ignoreCharChanges?: boolean;
        readonly alwaysRevealFirst?: boolean;
    }
    export function createDiffNavigator(diffEditor: IStandaloneDiffEditor, opts?: IDiffNavigatorOptions): IDiffNavigator;
    export function createModel(value: string, language?: string, uri?: Uri): ITextModel;
    export function setModelLanguage(model: ITextModel, languageId: string): void;
    export function setModelMarkers(model: ITextModel, owner: string, markers: IMarkerData[]): void;
    export function getModelMarkers(filter: {
        owner?: string;
        resource?: Uri;
        take?: number;
    }): IMarker[];
    export function onDidChangeMarkers(listener: (e: readonly Uri[]) => void): IDisposable;
    export function getModel(uri: Uri): ITextModel | null;
    export function getModels(): ITextModel[];
    export function onDidCreateModel(listener: (model: ITextModel) => void): IDisposable;
    export function onWillDisposeModel(listener: (model: ITextModel) => void): IDisposable;
    export function onDidChangeModelLanguage(listener: (e: {
        readonly model: ITextModel;
        readonly oldLanguage: string;
    }) => void): IDisposable;
    export function createWebWorker<T>(opts: IWebWorkerOptions): MonacoWebWorker<T>;
    export function colorizeElement(domNode: HTMLElement, options: IColorizerElementOptions): Promise<void>;
    export function colorize(text: string, languageId: string, options: IColorizerOptions): Promise<string>;
    export function colorizeModelLine(model: ITextModel, lineNumber: number, tabSize?: number): string;
    export function tokenize(text: string, languageId: string): Token[][];
    export function defineTheme(themeName: string, themeData: IStandaloneThemeData): void;
    export function setTheme(themeName: string): void;
    export function remeasureFonts(): void;
    export function registerCommand(id: string, handler: (accessor: any, ...args: any[]) => void): IDisposable;
    export type BuiltinTheme = 'vs' | 'vs-dark' | 'hc-black';
    export interface IStandaloneThemeData {
        base: BuiltinTheme;
        inherit: boolean;
        rules: ITokenThemeRule[];
        encodedTokensColors?: string[];
        colors: IColors;
    }
    export type IColors = {
        [colorId: string]: string;
    };
    export interface ITokenThemeRule {
        token: string;
        foreground?: string;
        background?: string;
        fontStyle?: string;
    }
    export interface MonacoWebWorker<T> {
        dispose(): void;
        getProxy(): Promise<T>;
        withSyncedResources(resources: Uri[]): Promise<T>;
    }
    export interface IWebWorkerOptions {
        moduleId: string;
        createData?: any;
        label?: string;
        host?: any;
        keepIdleModels?: boolean;
    }
    export interface IActionDescriptor {
        id: string;
        label: string;
        precondition?: string;
        keybindings?: number[];
        keybindingContext?: string;
        contextMenuGroupId?: string;
        contextMenuOrder?: number;
        run(editor: ICodeEditor, ...args: any[]): void | Promise<void>;
    }
    export interface IGlobalEditorOptions {
        tabSize?: number;
        insertSpaces?: boolean;
        detectIndentation?: boolean;
        trimAutoWhitespace?: boolean;
        largeFileOptimizations?: boolean;
        wordBasedSuggestions?: boolean;
        wordBasedSuggestionsOnlySameLanguage?: boolean;
        'semanticHighlighting.enabled'?: true | false | 'configuredByTheme';
        stablePeek?: boolean;
        maxTokenizationLineLength?: number;
        theme?: string;
        autoDetectHighContrast?: boolean;
    }
    export interface IStandaloneEditorConstructionOptions extends IEditorConstructionOptions, IGlobalEditorOptions {
        model?: ITextModel | null;
        value?: string;
        language?: string;
        theme?: string;
        autoDetectHighContrast?: boolean;
        accessibilityHelpUrl?: string;
    }
    export interface IDiffEditorConstructionOptions extends IDiffEditorOptions {
        theme?: string;
        autoDetectHighContrast?: boolean;
    }
    export interface IStandaloneCodeEditor extends ICodeEditor {
        updateOptions(newOptions: IEditorOptions & IGlobalEditorOptions): void;
        addCommand(keybinding: number, handler: ICommandHandler, context?: string): string | null;
        createContextKey<T>(key: string, defaultValue: T): IContextKey<T>;
        addAction(descriptor: IActionDescriptor): IDisposable;
    }
    export interface IStandaloneDiffEditor extends IDiffEditor {
        addCommand(keybinding: number, handler: ICommandHandler, context?: string): string | null;
        createContextKey<T>(key: string, defaultValue: T): IContextKey<T>;
        addAction(descriptor: IActionDescriptor): IDisposable;
        getOriginalEditor(): IStandaloneCodeEditor;
        getModifiedEditor(): IStandaloneCodeEditor;
    }
    export interface ICommandHandler {
        (...args: any[]): void;
    }
    export interface IContextKey<T> {
        set(value: T): void;
        reset(): void;
        get(): T | undefined;
    }
    export interface IEditorOverrideServices {
        [index: string]: any;
    }
    export interface IMarker {
        owner: string;
        resource: Uri;
        severity: MarkerSeverity;
        code?: string | {
            value: string;
            target: Uri;
        };
        message: string;
        source?: string;
        startLineNumber: number;
        startColumn: number;
        endLineNumber: number;
        endColumn: number;
        relatedInformation?: IRelatedInformation[];
        tags?: MarkerTag[];
    }
    export interface IMarkerData {
        code?: string | {
            value: string;
            target: Uri;
        };
        severity: MarkerSeverity;
        message: string;
        source?: string;
        startLineNumber: number;
        startColumn: number;
        endLineNumber: number;
        endColumn: number;
        relatedInformation?: IRelatedInformation[];
        tags?: MarkerTag[];
    }
    export interface IRelatedInformation {
        resource: Uri;
        message: string;
        startLineNumber: number;
        startColumn: number;
        endLineNumber: number;
        endColumn: number;
    }
    export interface IColorizerOptions {
        tabSize?: number;
    }
    export interface IColorizerElementOptions extends IColorizerOptions {
        theme?: string;
        mimeType?: string;
    }
    export enum ScrollbarVisibility {
        Auto = 1,
        Hidden = 2,
        Visible = 3
    }
    export interface ThemeColor {
        id: string;
    }
    export enum OverviewRulerLane {
        Left = 1,
        Center = 2,
        Right = 4,
        Full = 7
    }
    export enum MinimapPosition {
        Inline = 1,
        Gutter = 2
    }
    export interface IDecorationOptions {
        color: string | ThemeColor | undefined;
        darkColor?: string | ThemeColor;
    }
    export interface IModelDecorationOverviewRulerOptions extends IDecorationOptions {
        position: OverviewRulerLane;
    }
    export interface IModelDecorationMinimapOptions extends IDecorationOptions {
        position: MinimapPosition;
    }
    export interface IModelDecorationOptions {
        stickiness?: TrackedRangeStickiness;
        className?: string | null;
        glyphMarginHoverMessage?: IMarkdownString | IMarkdownString[] | null;
        hoverMessage?: IMarkdownString | IMarkdownString[] | null;
        isWholeLine?: boolean;
        zIndex?: number;
        overviewRuler?: IModelDecorationOverviewRulerOptions | null;
        minimap?: IModelDecorationMinimapOptions | null;
        glyphMarginClassName?: string | null;
        linesDecorationsClassName?: string | null;
        firstLineDecorationClassName?: string | null;
        marginClassName?: string | null;
        inlineClassName?: string | null;
        inlineClassNameAffectsLetterSpacing?: boolean;
        beforeContentClassName?: string | null;
        afterContentClassName?: string | null;
    }
    export interface IModelDeltaDecoration {
        range: IRange;
        options: IModelDecorationOptions;
    }
    export interface IModelDecoration {
        readonly id: string;
        readonly ownerId: number;
        readonly range: Range;
        readonly options: IModelDecorationOptions;
    }
    export interface IWordAtPosition {
        readonly word: string;
        readonly startColumn: number;
        readonly endColumn: number;
    }
    export enum EndOfLinePreference {
        TextDefined = 0,
        LF = 1,
        CRLF = 2
    }
    export enum DefaultEndOfLine {
        LF = 1,
        CRLF = 2
    }
    export enum EndOfLineSequence {
        LF = 0,
        CRLF = 1
    }
    export interface ISingleEditOperation {
        range: IRange;
        text: string | null;
        forceMoveMarkers?: boolean;
    }
    export interface IIdentifiedSingleEditOperation {
        range: IRange;
        text: string | null;
        forceMoveMarkers?: boolean;
    }
    export interface IValidEditOperation {
        range: Range;
        text: string;
    }
    export interface ICursorStateComputer {
        (inverseEditOperations: IValidEditOperation[]): Selection[] | null;
    }
    export class TextModelResolvedOptions {
        _textModelResolvedOptionsBrand: void;
        readonly tabSize: number;
        readonly indentSize: number;
        readonly insertSpaces: boolean;
        readonly defaultEOL: DefaultEndOfLine;
        readonly trimAutoWhitespace: boolean;
    }
    export interface ITextModelUpdateOptions {
        tabSize?: number;
        indentSize?: number;
        insertSpaces?: boolean;
        trimAutoWhitespace?: boolean;
    }
    export class FindMatch {
        _findMatchBrand: void;
        readonly range: Range;
        readonly matches: string[] | null;
    }
    export enum TrackedRangeStickiness {
        AlwaysGrowsWhenTypingAtEdges = 0,
        NeverGrowsWhenTypingAtEdges = 1,
        GrowsOnlyWhenTypingBefore = 2,
        GrowsOnlyWhenTypingAfter = 3
    }
    export interface ITextModel {
        readonly uri: Uri;
        readonly id: string;
        getOptions(): TextModelResolvedOptions;
        getVersionId(): number;
        getAlternativeVersionId(): number;
        setValue(newValue: string): void;
        getValue(eol?: EndOfLinePreference, preserveBOM?: boolean): string;
        getValueLength(eol?: EndOfLinePreference, preserveBOM?: boolean): number;
        getValueInRange(range: IRange, eol?: EndOfLinePreference): string;
        getValueLengthInRange(range: IRange): number;
        getCharacterCountInRange(range: IRange): number;
        getLineCount(): number;
        getLineContent(lineNumber: number): string;
        getLineLength(lineNumber: number): number;
        getLinesContent(): string[];
        getEOL(): string;
        getEndOfLineSequence(): EndOfLineSequence;
        getLineMinColumn(lineNumber: number): number;
        getLineMaxColumn(lineNumber: number): number;
        getLineFirstNonWhitespaceColumn(lineNumber: number): number;
        getLineLastNonWhitespaceColumn(lineNumber: number): number;
        validatePosition(position: IPosition): Position;
        modifyPosition(position: IPosition, offset: number): Position;
        validateRange(range: IRange): Range;
        getOffsetAt(position: IPosition): number;
        getPositionAt(offset: number): Position;
        getFullModelRange(): Range;
        isDisposed(): boolean;
        findMatches(searchString: string, searchOnlyEditableRange: boolean, isRegex: boolean, matchCase: boolean, wordSeparators: string | null, captureMatches: boolean, limitResultCount?: number): FindMatch[];
        findMatches(searchString: string, searchScope: IRange | IRange[], isRegex: boolean, matchCase: boolean, wordSeparators: string | null, captureMatches: boolean, limitResultCount?: number): FindMatch[];
        findNextMatch(searchString: string, searchStart: IPosition, isRegex: boolean, matchCase: boolean, wordSeparators: string | null, captureMatches: boolean): FindMatch | null;
        findPreviousMatch(searchString: string, searchStart: IPosition, isRegex: boolean, matchCase: boolean, wordSeparators: string | null, captureMatches: boolean): FindMatch | null;
        getModeId(): string;
        getWordAtPosition(position: IPosition): IWordAtPosition | null;
        getWordUntilPosition(position: IPosition): IWordAtPosition;
        deltaDecorations(oldDecorations: string[], newDecorations: IModelDeltaDecoration[], ownerId?: number): string[];
        getDecorationOptions(id: string): IModelDecorationOptions | null;
        getDecorationRange(id: string): Range | null;
        getLineDecorations(lineNumber: number, ownerId?: number, filterOutValidation?: boolean): IModelDecoration[];
        getLinesDecorations(startLineNumber: number, endLineNumber: number, ownerId?: number, filterOutValidation?: boolean): IModelDecoration[];
        getDecorationsInRange(range: IRange, ownerId?: number, filterOutValidation?: boolean): IModelDecoration[];
        getAllDecorations(ownerId?: number, filterOutValidation?: boolean): IModelDecoration[];
        getOverviewRulerDecorations(ownerId?: number, filterOutValidation?: boolean): IModelDecoration[];
        normalizeIndentation(str: string): string;
        updateOptions(newOpts: ITextModelUpdateOptions): void;
        detectIndentation(defaultInsertSpaces: boolean, defaultTabSize: number): void;
        pushStackElement(): void;
        popStackElement(): void;
        pushEditOperations(beforeCursorState: Selection[] | null, editOperations: IIdentifiedSingleEditOperation[], cursorStateComputer: ICursorStateComputer): Selection[] | null;
        pushEOL(eol: EndOfLineSequence): void;
        applyEdits(operations: IIdentifiedSingleEditOperation[]): void;
        applyEdits(operations: IIdentifiedSingleEditOperation[], computeUndoEdits: false): void;
        applyEdits(operations: IIdentifiedSingleEditOperation[], computeUndoEdits: true): IValidEditOperation[];
        setEOL(eol: EndOfLineSequence): void;
        onDidChangeContent(listener: (e: IModelContentChangedEvent) => void): IDisposable;
        onDidChangeDecorations(listener: (e: IModelDecorationsChangedEvent) => void): IDisposable;
        onDidChangeOptions(listener: (e: IModelOptionsChangedEvent) => void): IDisposable;
        onDidChangeLanguage(listener: (e: IModelLanguageChangedEvent) => void): IDisposable;
        onDidChangeLanguageConfiguration(listener: (e: IModelLanguageConfigurationChangedEvent) => void): IDisposable;
        onDidChangeAttached(listener: () => void): IDisposable;
        onWillDispose(listener: () => void): IDisposable;
        dispose(): void;
        isAttachedToEditor(): boolean;
    }
    export interface IEditOperationBuilder {
        addEditOperation(range: IRange, text: string | null, forceMoveMarkers?: boolean): void;
        addTrackedEditOperation(range: IRange, text: string | null, forceMoveMarkers?: boolean): void;
        trackSelection(selection: Selection, trackPreviousOnEmpty?: boolean): string;
    }
    export interface ICursorStateComputerData {
        getInverseEditOperations(): IValidEditOperation[];
        getTrackedSelection(id: string): Selection;
    }
    export interface ICommand {
        getEditOperations(model: ITextModel, builder: IEditOperationBuilder): void;
        computeCursorState(model: ITextModel, helper: ICursorStateComputerData): Selection;
    }
    export interface IDiffEditorModel {
        original: ITextModel;
        modified: ITextModel;
    }
    export interface IModelChangedEvent {
        readonly oldModelUrl: Uri | null;
        readonly newModelUrl: Uri | null;
    }
    export interface IDimension {
        width: number;
        height: number;
    }
    export interface IChange {
        readonly originalStartLineNumber: number;
        readonly originalEndLineNumber: number;
        readonly modifiedStartLineNumber: number;
        readonly modifiedEndLineNumber: number;
    }
    export interface ICharChange extends IChange {
        readonly originalStartColumn: number;
        readonly originalEndColumn: number;
        readonly modifiedStartColumn: number;
        readonly modifiedEndColumn: number;
    }
    export interface ILineChange extends IChange {
        readonly charChanges: ICharChange[] | undefined;
    }
    export interface IContentSizeChangedEvent {
        readonly contentWidth: number;
        readonly contentHeight: number;
        readonly contentWidthChanged: boolean;
        readonly contentHeightChanged: boolean;
    }
    export interface INewScrollPosition {
        scrollLeft?: number;
        scrollTop?: number;
    }
    export interface IEditorAction {
        readonly id: string;
        readonly label: string;
        readonly alias: string;
        isSupported(): boolean;
        run(): Promise<void>;
    }
    export type IEditorModel = ITextModel | IDiffEditorModel;
    export interface ICursorState {
        inSelectionMode: boolean;
        selectionStart: IPosition;
        position: IPosition;
    }
    export interface IViewState {
        scrollTop?: number;
        scrollTopWithoutViewZones?: number;
        scrollLeft: number;
        firstPosition: IPosition;
        firstPositionDeltaTop: number;
    }
    export interface ICodeEditorViewState {
        cursorState: ICursorState[];
        viewState: IViewState;
        contributionsState: {
            [id: string]: any;
        };
    }
    export interface IDiffEditorViewState {
        original: ICodeEditorViewState | null;
        modified: ICodeEditorViewState | null;
    }
    export type IEditorViewState = ICodeEditorViewState | IDiffEditorViewState;
    export enum ScrollType {
        Smooth = 0,
        Immediate = 1
    }
    export interface IEditor {
        onDidDispose(listener: () => void): IDisposable;
        dispose(): void;
        getId(): string;
        getEditorType(): string;
        updateOptions(newOptions: IEditorOptions): void;
        layout(dimension?: IDimension): void;
        focus(): void;
        hasTextFocus(): boolean;
        getSupportedActions(): IEditorAction[];
        saveViewState(): IEditorViewState | null;
        restoreViewState(state: IEditorViewState): void;
        getVisibleColumnFromPosition(position: IPosition): number;
        getPosition(): Position | null;
        setPosition(position: IPosition): void;
        revealLine(lineNumber: number, scrollType?: ScrollType): void;
        revealLineInCenter(lineNumber: number, scrollType?: ScrollType): void;
        revealLineInCenterIfOutsideViewport(lineNumber: number, scrollType?: ScrollType): void;
        revealLineNearTop(lineNumber: number, scrollType?: ScrollType): void;
        revealPosition(position: IPosition, scrollType?: ScrollType): void;
        revealPositionInCenter(position: IPosition, scrollType?: ScrollType): void;
        revealPositionInCenterIfOutsideViewport(position: IPosition, scrollType?: ScrollType): void;
        revealPositionNearTop(position: IPosition, scrollType?: ScrollType): void;
        getSelection(): Selection | null;
        getSelections(): Selection[] | null;
        setSelection(selection: IRange): void;
        setSelection(selection: Range): void;
        setSelection(selection: ISelection): void;
        setSelection(selection: Selection): void;
        setSelections(selections: readonly ISelection[]): void;
        revealLines(startLineNumber: number, endLineNumber: number, scrollType?: ScrollType): void;
        revealLinesInCenter(lineNumber: number, endLineNumber: number, scrollType?: ScrollType): void;
        revealLinesInCenterIfOutsideViewport(lineNumber: number, endLineNumber: number, scrollType?: ScrollType): void;
        revealLinesNearTop(lineNumber: number, endLineNumber: number, scrollType?: ScrollType): void;
        revealRange(range: IRange, scrollType?: ScrollType): void;
        revealRangeInCenter(range: IRange, scrollType?: ScrollType): void;
        revealRangeAtTop(range: IRange, scrollType?: ScrollType): void;
        revealRangeInCenterIfOutsideViewport(range: IRange, scrollType?: ScrollType): void;
        revealRangeNearTop(range: IRange, scrollType?: ScrollType): void;
        revealRangeNearTopIfOutsideViewport(range: IRange, scrollType?: ScrollType): void;
        trigger(source: string | null | undefined, handlerId: string, payload: any): void;
        getModel(): IEditorModel | null;
        setModel(model: IEditorModel | null): void;
    }
    export interface IEditorContribution {
        dispose(): void;
        saveViewState?(): any;
        restoreViewState?(state: any): void;
    }
    export const EditorType: {
        ICodeEditor: string;
        IDiffEditor: string;
    };
    export interface IModelLanguageChangedEvent {
        readonly oldLanguage: string;
        readonly newLanguage: string;
    }
    export interface IModelLanguageConfigurationChangedEvent {
    }
    export interface IModelContentChange {
        readonly range: IRange;
        readonly rangeOffset: number;
        readonly rangeLength: number;
        readonly text: string;
    }
    export interface IModelContentChangedEvent {
        readonly changes: IModelContentChange[];
        readonly eol: string;
        readonly versionId: number;
        readonly isUndoing: boolean;
        readonly isRedoing: boolean;
        readonly isFlush: boolean;
    }
    export interface IModelDecorationsChangedEvent {
        readonly affectsMinimap: boolean;
        readonly affectsOverviewRuler: boolean;
    }
    export interface IModelOptionsChangedEvent {
        readonly tabSize: boolean;
        readonly indentSize: boolean;
        readonly insertSpaces: boolean;
        readonly trimAutoWhitespace: boolean;
    }
    export enum CursorChangeReason {
        NotSet = 0,
        ContentFlush = 1,
        RecoverFromMarkers = 2,
        Explicit = 3,
        Paste = 4,
        Undo = 5,
        Redo = 6
    }
    export interface ICursorPositionChangedEvent {
        readonly position: Position;
        readonly secondaryPositions: Position[];
        readonly reason: CursorChangeReason;
        readonly source: string;
    }
    export interface ICursorSelectionChangedEvent {
        readonly selection: Selection;
        readonly secondarySelections: Selection[];
        readonly modelVersionId: number;
        readonly oldSelections: Selection[] | null;
        readonly oldModelVersionId: number;
        readonly source: string;
        readonly reason: CursorChangeReason;
    }
    export enum AccessibilitySupport {
        Unknown = 0,
        Disabled = 1,
        Enabled = 2
    }
    export type EditorAutoClosingStrategy = 'always' | 'languageDefined' | 'beforeWhitespace' | 'never';
    export type EditorAutoSurroundStrategy = 'languageDefined' | 'quotes' | 'brackets' | 'never';
    export type EditorAutoClosingEditStrategy = 'always' | 'auto' | 'never';
    export enum EditorAutoIndentStrategy {
        None = 0,
        Keep = 1,
        Brackets = 2,
        Advanced = 3,
        Full = 4
    }
    export interface IEditorOptions {
        inDiffEditor?: boolean;
        ariaLabel?: string;
        tabIndex?: number;
        rulers?: (number | IRulerOption)[];
        wordSeparators?: string;
        selectionClipboard?: boolean;
        lineNumbers?: LineNumbersType;
        cursorSurroundingLines?: number;
        cursorSurroundingLinesStyle?: 'default' | 'all';
        renderFinalNewline?: boolean;
        unusualLineTerminators?: 'auto' | 'off' | 'prompt';
        selectOnLineNumbers?: boolean;
        lineNumbersMinChars?: number;
        glyphMargin?: boolean;
        lineDecorationsWidth?: number | string;
        revealHorizontalRightPadding?: number;
        roundedSelection?: boolean;
        extraEditorClassName?: string;
        readOnly?: boolean;
        domReadOnly?: boolean;
        linkedEditing?: boolean;
        renameOnType?: boolean;
        renderValidationDecorations?: 'editable' | 'on' | 'off';
        scrollbar?: IEditorScrollbarOptions;
        minimap?: IEditorMinimapOptions;
        find?: IEditorFindOptions;
        fixedOverflowWidgets?: boolean;
        overviewRulerLanes?: number;
        overviewRulerBorder?: boolean;
        cursorBlinking?: 'blink' | 'smooth' | 'phase' | 'expand' | 'solid';
        mouseWheelZoom?: boolean;
        mouseStyle?: 'text' | 'default' | 'copy';
        cursorSmoothCaretAnimation?: boolean;
        cursorStyle?: 'line' | 'block' | 'underline' | 'line-thin' | 'block-outline' | 'underline-thin';
        cursorWidth?: number;
        fontLigatures?: boolean | string;
        disableLayerHinting?: boolean;
        disableMonospaceOptimizations?: boolean;
        hideCursorInOverviewRuler?: boolean;
        scrollBeyondLastLine?: boolean;
        scrollBeyondLastColumn?: number;
        smoothScrolling?: boolean;
        automaticLayout?: boolean;
        wordWrap?: 'off' | 'on' | 'wordWrapColumn' | 'bounded';
        wordWrapOverride1?: 'off' | 'on' | 'inherit';
        wordWrapOverride2?: 'off' | 'on' | 'inherit';
        wordWrapColumn?: number;
        wrappingIndent?: 'none' | 'same' | 'indent' | 'deepIndent';
        wrappingStrategy?: 'simple' | 'advanced';
        wordWrapBreakBeforeCharacters?: string;
        wordWrapBreakAfterCharacters?: string;
        stopRenderingLineAfter?: number;
        hover?: IEditorHoverOptions;
        links?: boolean;
        colorDecorators?: boolean;
        comments?: IEditorCommentsOptions;
        contextmenu?: boolean;
        mouseWheelScrollSensitivity?: number;
        fastScrollSensitivity?: number;
        scrollPredominantAxis?: boolean;
        columnSelection?: boolean;
        multiCursorModifier?: 'ctrlCmd' | 'alt';
        multiCursorMergeOverlapping?: boolean;
        multiCursorPaste?: 'spread' | 'full';
        accessibilitySupport?: 'auto' | 'off' | 'on';
        accessibilityPageSize?: number;
        suggest?: ISuggestOptions;
        smartSelect?: ISmartSelectOptions;
        gotoLocation?: IGotoLocationOptions;
        quickSuggestions?: boolean | IQuickSuggestionsOptions;
        quickSuggestionsDelay?: number;
        padding?: IEditorPaddingOptions;
        parameterHints?: IEditorParameterHintOptions;
        autoClosingBrackets?: EditorAutoClosingStrategy;
        autoClosingQuotes?: EditorAutoClosingStrategy;
        autoClosingDelete?: EditorAutoClosingEditStrategy;
        autoClosingOvertype?: EditorAutoClosingEditStrategy;
        autoSurround?: EditorAutoSurroundStrategy;
        autoIndent?: 'none' | 'keep' | 'brackets' | 'advanced' | 'full';
        stickyTabStops?: boolean;
        formatOnType?: boolean;
        formatOnPaste?: boolean;
        dragAndDrop?: boolean;
        suggestOnTriggerCharacters?: boolean;
        acceptSuggestionOnEnter?: 'on' | 'smart' | 'off';
        acceptSuggestionOnCommitCharacter?: boolean;
        snippetSuggestions?: 'top' | 'bottom' | 'inline' | 'none';
        emptySelectionClipboard?: boolean;
        copyWithSyntaxHighlighting?: boolean;
        suggestSelection?: 'first' | 'recentlyUsed' | 'recentlyUsedByPrefix';
        suggestFontSize?: number;
        suggestLineHeight?: number;
        tabCompletion?: 'on' | 'off' | 'onlySnippets';
        selectionHighlight?: boolean;
        occurrencesHighlight?: boolean;
        codeLens?: boolean;
        codeLensFontFamily?: string;
        codeLensFontSize?: number;
        lightbulb?: IEditorLightbulbOptions;
        codeActionsOnSaveTimeout?: number;
        folding?: boolean;
        foldingStrategy?: 'auto' | 'indentation';
        foldingHighlight?: boolean;
        showFoldingControls?: 'always' | 'mouseover';
        unfoldOnClickAfterEndOfLine?: boolean;
        matchBrackets?: 'never' | 'near' | 'always';
        renderWhitespace?: 'none' | 'boundary' | 'selection' | 'trailing' | 'all';
        renderControlCharacters?: boolean;
        renderIndentGuides?: boolean;
        highlightActiveIndentGuide?: boolean;
        renderLineHighlight?: 'none' | 'gutter' | 'line' | 'all';
        renderLineHighlightOnlyWhenFocus?: boolean;
        useTabStops?: boolean;
        fontFamily?: string;
        fontWeight?: string;
        fontSize?: number;
        lineHeight?: number;
        letterSpacing?: number;
        showUnused?: boolean;
        peekWidgetDefaultFocus?: 'tree' | 'editor';
        definitionLinkOpensInPeek?: boolean;
        showDeprecated?: boolean;
        inlineHints?: IEditorInlineHintsOptions;
        useShadowDOM?: boolean;
    }
    export interface IDiffEditorOptions extends IEditorOptions {
        enableSplitViewResizing?: boolean;
        renderSideBySide?: boolean;
        maxComputationTime?: number;
        ignoreTrimWhitespace?: boolean;
        renderIndicators?: boolean;
        originalEditable?: boolean;
        diffCodeLens?: boolean;
        isInEmbeddedEditor?: boolean;
        renderOverviewRuler?: boolean;
        diffWordWrap?: 'off' | 'on' | 'inherit';
        originalAriaLabel?: string;
        modifiedAriaLabel?: string;
    }
    export class ConfigurationChangedEvent {
        hasChanged(id: EditorOption): boolean;
    }
    export interface IComputedEditorOptions {
        get<T extends EditorOption>(id: T): FindComputedEditorOptionValueById<T>;
    }
    export interface IEditorOption<K1 extends EditorOption, V> {
        readonly id: K1;
        readonly name: string;
        defaultValue: V;
    }
    export interface IEditorCommentsOptions {
        insertSpace?: boolean;
        ignoreEmptyLines?: boolean;
    }
    export type EditorCommentsOptions = Readonly<Required<IEditorCommentsOptions>>;
    export enum TextEditorCursorBlinkingStyle {
        Hidden = 0,
        Blink = 1,
        Smooth = 2,
        Phase = 3,
        Expand = 4,
        Solid = 5
    }
    export enum TextEditorCursorStyle {
        Line = 1,
        Block = 2,
        Underline = 3,
        LineThin = 4,
        BlockOutline = 5,
        UnderlineThin = 6
    }
    export interface IEditorFindOptions {
        cursorMoveOnType?: boolean;
        seedSearchStringFromSelection?: boolean;
        autoFindInSelection?: 'never' | 'always' | 'multiline';
        addExtraSpaceOnTop?: boolean;
        loop?: boolean;
    }
    export type EditorFindOptions = Readonly<Required<IEditorFindOptions>>;
    export type GoToLocationValues = 'peek' | 'gotoAndPeek' | 'goto';
    export interface IGotoLocationOptions {
        multiple?: GoToLocationValues;
        multipleDefinitions?: GoToLocationValues;
        multipleTypeDefinitions?: GoToLocationValues;
        multipleDeclarations?: GoToLocationValues;
        multipleImplementations?: GoToLocationValues;
        multipleReferences?: GoToLocationValues;
        alternativeDefinitionCommand?: string;
        alternativeTypeDefinitionCommand?: string;
        alternativeDeclarationCommand?: string;
        alternativeImplementationCommand?: string;
        alternativeReferenceCommand?: string;
    }
    export type GoToLocationOptions = Readonly<Required<IGotoLocationOptions>>;
    export interface IEditorHoverOptions {
        enabled?: boolean;
        delay?: number;
        sticky?: boolean;
    }
    export type EditorHoverOptions = Readonly<Required<IEditorHoverOptions>>;
    export interface OverviewRulerPosition {
        readonly width: number;
        readonly height: number;
        readonly top: number;
        readonly right: number;
    }
    export enum RenderMinimap {
        None = 0,
        Text = 1,
        Blocks = 2
    }
    export interface EditorLayoutInfo {
        readonly width: number;
        readonly height: number;
        readonly glyphMarginLeft: number;
        readonly glyphMarginWidth: number;
        readonly lineNumbersLeft: number;
        readonly lineNumbersWidth: number;
        readonly decorationsLeft: number;
        readonly decorationsWidth: number;
        readonly contentLeft: number;
        readonly contentWidth: number;
        readonly minimap: EditorMinimapLayoutInfo;
        readonly viewportColumn: number;
        readonly isWordWrapMinified: boolean;
        readonly isViewportWrapping: boolean;
        readonly wrappingColumn: number;
        readonly verticalScrollbarWidth: number;
        readonly horizontalScrollbarHeight: number;
        readonly overviewRuler: OverviewRulerPosition;
    }
    export interface EditorMinimapLayoutInfo {
        readonly renderMinimap: RenderMinimap;
        readonly minimapLeft: number;
        readonly minimapWidth: number;
        readonly minimapHeightIsEditorHeight: boolean;
        readonly minimapIsSampling: boolean;
        readonly minimapScale: number;
        readonly minimapLineHeight: number;
        readonly minimapCanvasInnerWidth: number;
        readonly minimapCanvasInnerHeight: number;
        readonly minimapCanvasOuterWidth: number;
        readonly minimapCanvasOuterHeight: number;
    }
    export interface IEditorLightbulbOptions {
        enabled?: boolean;
    }
    export type EditorLightbulbOptions = Readonly<Required<IEditorLightbulbOptions>>;
    export interface IEditorInlineHintsOptions {
        enabled?: boolean;
        fontSize?: number;
        fontFamily?: string;
    }
    export type EditorInlineHintsOptions = Readonly<Required<IEditorInlineHintsOptions>>;
    export interface IEditorMinimapOptions {
        enabled?: boolean;
        side?: 'right' | 'left';
        size?: 'proportional' | 'fill' | 'fit';
        showSlider?: 'always' | 'mouseover';
        renderCharacters?: boolean;
        maxColumn?: number;
        scale?: number;
    }
    export type EditorMinimapOptions = Readonly<Required<IEditorMinimapOptions>>;
    export interface IEditorPaddingOptions {
        top?: number;
        bottom?: number;
    }
    export interface InternalEditorPaddingOptions {
        readonly top: number;
        readonly bottom: number;
    }
    export interface IEditorParameterHintOptions {
        enabled?: boolean;
        cycle?: boolean;
    }
    export type InternalParameterHintOptions = Readonly<Required<IEditorParameterHintOptions>>;
    export interface IQuickSuggestionsOptions {
        other?: boolean;
        comments?: boolean;
        strings?: boolean;
    }
    export type ValidQuickSuggestionsOptions = boolean | Readonly<Required<IQuickSuggestionsOptions>>;
    export type LineNumbersType = 'on' | 'off' | 'relative' | 'interval' | ((lineNumber: number) => string);
    export enum RenderLineNumbersType {
        Off = 0,
        On = 1,
        Relative = 2,
        Interval = 3,
        Custom = 4
    }
    export interface InternalEditorRenderLineNumbersOptions {
        readonly renderType: RenderLineNumbersType;
        readonly renderFn: ((lineNumber: number) => string) | null;
    }
    export interface IRulerOption {
        readonly column: number;
        readonly color: string | null;
    }
    export interface IEditorScrollbarOptions {
        arrowSize?: number;
        vertical?: 'auto' | 'visible' | 'hidden';
        horizontal?: 'auto' | 'visible' | 'hidden';
        useShadows?: boolean;
        verticalHasArrows?: boolean;
        horizontalHasArrows?: boolean;
        handleMouseWheel?: boolean;
        alwaysConsumeMouseWheel?: boolean;
        horizontalScrollbarSize?: number;
        verticalScrollbarSize?: number;
        verticalSliderSize?: number;
        horizontalSliderSize?: number;
        scrollByPage?: boolean;
    }
    export interface InternalEditorScrollbarOptions {
        readonly arrowSize: number;
        readonly vertical: ScrollbarVisibility;
        readonly horizontal: ScrollbarVisibility;
        readonly useShadows: boolean;
        readonly verticalHasArrows: boolean;
        readonly horizontalHasArrows: boolean;
        readonly handleMouseWheel: boolean;
        readonly alwaysConsumeMouseWheel: boolean;
        readonly horizontalScrollbarSize: number;
        readonly horizontalSliderSize: number;
        readonly verticalScrollbarSize: number;
        readonly verticalSliderSize: number;
        readonly scrollByPage: boolean;
    }
    export interface ISuggestOptions {
        insertMode?: 'insert' | 'replace';
        filterGraceful?: boolean;
        snippetsPreventQuickSuggestions?: boolean;
        localityBonus?: boolean;
        shareSuggestSelections?: boolean;
        showIcons?: boolean;
        showStatusBar?: boolean;
        showInlineDetails?: boolean;
        showMethods?: boolean;
        showFunctions?: boolean;
        showConstructors?: boolean;
        showFields?: boolean;
        showVariables?: boolean;
        showClasses?: boolean;
        showStructs?: boolean;
        showInterfaces?: boolean;
        showModules?: boolean;
        showProperties?: boolean;
        showEvents?: boolean;
        showOperators?: boolean;
        showUnits?: boolean;
        showValues?: boolean;
        showConstants?: boolean;
        showEnums?: boolean;
        showEnumMembers?: boolean;
        showKeywords?: boolean;
        showWords?: boolean;
        showColors?: boolean;
        showFiles?: boolean;
        showReferences?: boolean;
        showFolders?: boolean;
        showTypeParameters?: boolean;
        showIssues?: boolean;
        showUsers?: boolean;
        showSnippets?: boolean;
    }
    export type InternalSuggestOptions = Readonly<Required<ISuggestOptions>>;
    export interface ISmartSelectOptions {
        selectLeadingAndTrailingWhitespace?: boolean;
    }
    export type SmartSelectOptions = Readonly<Required<ISmartSelectOptions>>;
    export enum WrappingIndent {
        None = 0,
        Same = 1,
        Indent = 2,
        DeepIndent = 3
    }
    export interface EditorWrappingInfo {
        readonly isDominatedByLongLines: boolean;
        readonly isWordWrapMinified: boolean;
        readonly isViewportWrapping: boolean;
        readonly wrappingColumn: number;
    }
    export enum EditorOption {
        acceptSuggestionOnCommitCharacter = 0,
        acceptSuggestionOnEnter = 1,
        accessibilitySupport = 2,
        accessibilityPageSize = 3,
        ariaLabel = 4,
        autoClosingBrackets = 5,
        autoClosingDelete = 6,
        autoClosingOvertype = 7,
        autoClosingQuotes = 8,
        autoIndent = 9,
        automaticLayout = 10,
        autoSurround = 11,
        codeLens = 12,
        codeLensFontFamily = 13,
        codeLensFontSize = 14,
        colorDecorators = 15,
        columnSelection = 16,
        comments = 17,
        contextmenu = 18,
        copyWithSyntaxHighlighting = 19,
        cursorBlinking = 20,
        cursorSmoothCaretAnimation = 21,
        cursorStyle = 22,
        cursorSurroundingLines = 23,
        cursorSurroundingLinesStyle = 24,
        cursorWidth = 25,
        disableLayerHinting = 26,
        disableMonospaceOptimizations = 27,
        domReadOnly = 28,
        dragAndDrop = 29,
        emptySelectionClipboard = 30,
        extraEditorClassName = 31,
        fastScrollSensitivity = 32,
        find = 33,
        fixedOverflowWidgets = 34,
        folding = 35,
        foldingStrategy = 36,
        foldingHighlight = 37,
        unfoldOnClickAfterEndOfLine = 38,
        fontFamily = 39,
        fontInfo = 40,
        fontLigatures = 41,
        fontSize = 42,
        fontWeight = 43,
        formatOnPaste = 44,
        formatOnType = 45,
        glyphMargin = 46,
        gotoLocation = 47,
        hideCursorInOverviewRuler = 48,
        highlightActiveIndentGuide = 49,
        hover = 50,
        inDiffEditor = 51,
        letterSpacing = 52,
        lightbulb = 53,
        lineDecorationsWidth = 54,
        lineHeight = 55,
        lineNumbers = 56,
        lineNumbersMinChars = 57,
        linkedEditing = 58,
        links = 59,
        matchBrackets = 60,
        minimap = 61,
        mouseStyle = 62,
        mouseWheelScrollSensitivity = 63,
        mouseWheelZoom = 64,
        multiCursorMergeOverlapping = 65,
        multiCursorModifier = 66,
        multiCursorPaste = 67,
        occurrencesHighlight = 68,
        overviewRulerBorder = 69,
        overviewRulerLanes = 70,
        padding = 71,
        parameterHints = 72,
        peekWidgetDefaultFocus = 73,
        definitionLinkOpensInPeek = 74,
        quickSuggestions = 75,
        quickSuggestionsDelay = 76,
        readOnly = 77,
        renameOnType = 78,
        renderControlCharacters = 79,
        renderIndentGuides = 80,
        renderFinalNewline = 81,
        renderLineHighlight = 82,
        renderLineHighlightOnlyWhenFocus = 83,
        renderValidationDecorations = 84,
        renderWhitespace = 85,
        revealHorizontalRightPadding = 86,
        roundedSelection = 87,
        rulers = 88,
        scrollbar = 89,
        scrollBeyondLastColumn = 90,
        scrollBeyondLastLine = 91,
        scrollPredominantAxis = 92,
        selectionClipboard = 93,
        selectionHighlight = 94,
        selectOnLineNumbers = 95,
        showFoldingControls = 96,
        showUnused = 97,
        snippetSuggestions = 98,
        smartSelect = 99,
        smoothScrolling = 100,
        stickyTabStops = 101,
        stopRenderingLineAfter = 102,
        suggest = 103,
        suggestFontSize = 104,
        suggestLineHeight = 105,
        suggestOnTriggerCharacters = 106,
        suggestSelection = 107,
        tabCompletion = 108,
        tabIndex = 109,
        unusualLineTerminators = 110,
        useShadowDOM = 111,
        useTabStops = 112,
        wordSeparators = 113,
        wordWrap = 114,
        wordWrapBreakAfterCharacters = 115,
        wordWrapBreakBeforeCharacters = 116,
        wordWrapColumn = 117,
        wordWrapOverride1 = 118,
        wordWrapOverride2 = 119,
        wrappingIndent = 120,
        wrappingStrategy = 121,
        showDeprecated = 122,
        inlineHints = 123,
        editorClassName = 124,
        pixelRatio = 125,
        tabFocusMode = 126,
        layoutInfo = 127,
        wrappingInfo = 128
    }
    export const EditorOptions: {
        acceptSuggestionOnCommitCharacter: IEditorOption<EditorOption.acceptSuggestionOnCommitCharacter, boolean>;
        acceptSuggestionOnEnter: IEditorOption<EditorOption.acceptSuggestionOnEnter, 'on' | 'off' | 'smart'>;
        accessibilitySupport: IEditorOption<EditorOption.accessibilitySupport, AccessibilitySupport>;
        accessibilityPageSize: IEditorOption<EditorOption.accessibilityPageSize, number>;
        ariaLabel: IEditorOption<EditorOption.ariaLabel, string>;
        autoClosingBrackets: IEditorOption<EditorOption.autoClosingBrackets, 'always' | 'languageDefined' | 'beforeWhitespace' | 'never'>;
        autoClosingDelete: IEditorOption<EditorOption.autoClosingDelete, 'always' | 'never' | 'auto'>;
        autoClosingOvertype: IEditorOption<EditorOption.autoClosingOvertype, 'always' | 'never' | 'auto'>;
        autoClosingQuotes: IEditorOption<EditorOption.autoClosingQuotes, 'always' | 'languageDefined' | 'beforeWhitespace' | 'never'>;
        autoIndent: IEditorOption<EditorOption.autoIndent, EditorAutoIndentStrategy>;
        automaticLayout: IEditorOption<EditorOption.automaticLayout, boolean>;
        autoSurround: IEditorOption<EditorOption.autoSurround, 'languageDefined' | 'never' | 'quotes' | 'brackets'>;
        stickyTabStops: IEditorOption<EditorOption.stickyTabStops, boolean>;
        codeLens: IEditorOption<EditorOption.codeLens, boolean>;
        codeLensFontFamily: IEditorOption<EditorOption.codeLensFontFamily, string>;
        codeLensFontSize: IEditorOption<EditorOption.codeLensFontSize, number>;
        colorDecorators: IEditorOption<EditorOption.colorDecorators, boolean>;
        columnSelection: IEditorOption<EditorOption.columnSelection, boolean>;
        comments: IEditorOption<EditorOption.comments, EditorCommentsOptions>;
        contextmenu: IEditorOption<EditorOption.contextmenu, boolean>;
        copyWithSyntaxHighlighting: IEditorOption<EditorOption.copyWithSyntaxHighlighting, boolean>;
        cursorBlinking: IEditorOption<EditorOption.cursorBlinking, TextEditorCursorBlinkingStyle>;
        cursorSmoothCaretAnimation: IEditorOption<EditorOption.cursorSmoothCaretAnimation, boolean>;
        cursorStyle: IEditorOption<EditorOption.cursorStyle, TextEditorCursorStyle>;
        cursorSurroundingLines: IEditorOption<EditorOption.cursorSurroundingLines, number>;
        cursorSurroundingLinesStyle: IEditorOption<EditorOption.cursorSurroundingLinesStyle, 'default' | 'all'>;
        cursorWidth: IEditorOption<EditorOption.cursorWidth, number>;
        disableLayerHinting: IEditorOption<EditorOption.disableLayerHinting, boolean>;
        disableMonospaceOptimizations: IEditorOption<EditorOption.disableMonospaceOptimizations, boolean>;
        domReadOnly: IEditorOption<EditorOption.domReadOnly, boolean>;
        dragAndDrop: IEditorOption<EditorOption.dragAndDrop, boolean>;
        emptySelectionClipboard: IEditorOption<EditorOption.emptySelectionClipboard, boolean>;
        extraEditorClassName: IEditorOption<EditorOption.extraEditorClassName, string>;
        fastScrollSensitivity: IEditorOption<EditorOption.fastScrollSensitivity, number>;
        find: IEditorOption<EditorOption.find, EditorFindOptions>;
        fixedOverflowWidgets: IEditorOption<EditorOption.fixedOverflowWidgets, boolean>;
        folding: IEditorOption<EditorOption.folding, boolean>;
        foldingStrategy: IEditorOption<EditorOption.foldingStrategy, 'auto' | 'indentation'>;
        foldingHighlight: IEditorOption<EditorOption.foldingHighlight, boolean>;
        unfoldOnClickAfterEndOfLine: IEditorOption<EditorOption.unfoldOnClickAfterEndOfLine, boolean>;
        fontFamily: IEditorOption<EditorOption.fontFamily, string>;
        fontInfo: IEditorOption<EditorOption.fontInfo, FontInfo>;
        fontLigatures2: IEditorOption<EditorOption.fontLigatures, string>;
        fontSize: IEditorOption<EditorOption.fontSize, number>;
        fontWeight: IEditorOption<EditorOption.fontWeight, string>;
        formatOnPaste: IEditorOption<EditorOption.formatOnPaste, boolean>;
        formatOnType: IEditorOption<EditorOption.formatOnType, boolean>;
        glyphMargin: IEditorOption<EditorOption.glyphMargin, boolean>;
        gotoLocation: IEditorOption<EditorOption.gotoLocation, GoToLocationOptions>;
        hideCursorInOverviewRuler: IEditorOption<EditorOption.hideCursorInOverviewRuler, boolean>;
        highlightActiveIndentGuide: IEditorOption<EditorOption.highlightActiveIndentGuide, boolean>;
        hover: IEditorOption<EditorOption.hover, EditorHoverOptions>;
        inDiffEditor: IEditorOption<EditorOption.inDiffEditor, boolean>;
        letterSpacing: IEditorOption<EditorOption.letterSpacing, number>;
        lightbulb: IEditorOption<EditorOption.lightbulb, EditorLightbulbOptions>;
        lineDecorationsWidth: IEditorOption<EditorOption.lineDecorationsWidth, string | number>;
        lineHeight: IEditorOption<EditorOption.lineHeight, number>;
        lineNumbers: IEditorOption<EditorOption.lineNumbers, InternalEditorRenderLineNumbersOptions>;
        lineNumbersMinChars: IEditorOption<EditorOption.lineNumbersMinChars, number>;
        linkedEditing: IEditorOption<EditorOption.linkedEditing, boolean>;
        links: IEditorOption<EditorOption.links, boolean>;
        matchBrackets: IEditorOption<EditorOption.matchBrackets, 'always' | 'never' | 'near'>;
        minimap: IEditorOption<EditorOption.minimap, EditorMinimapOptions>;
        mouseStyle: IEditorOption<EditorOption.mouseStyle, 'default' | 'text' | 'copy'>;
        mouseWheelScrollSensitivity: IEditorOption<EditorOption.mouseWheelScrollSensitivity, number>;
        mouseWheelZoom: IEditorOption<EditorOption.mouseWheelZoom, boolean>;
        multiCursorMergeOverlapping: IEditorOption<EditorOption.multiCursorMergeOverlapping, boolean>;
        multiCursorModifier: IEditorOption<EditorOption.multiCursorModifier, 'altKey' | 'metaKey' | 'ctrlKey'>;
        multiCursorPaste: IEditorOption<EditorOption.multiCursorPaste, 'spread' | 'full'>;
        occurrencesHighlight: IEditorOption<EditorOption.occurrencesHighlight, boolean>;
        overviewRulerBorder: IEditorOption<EditorOption.overviewRulerBorder, boolean>;
        overviewRulerLanes: IEditorOption<EditorOption.overviewRulerLanes, number>;
        padding: IEditorOption<EditorOption.padding, InternalEditorPaddingOptions>;
        parameterHints: IEditorOption<EditorOption.parameterHints, InternalParameterHintOptions>;
        peekWidgetDefaultFocus: IEditorOption<EditorOption.peekWidgetDefaultFocus, 'tree' | 'editor'>;
        definitionLinkOpensInPeek: IEditorOption<EditorOption.definitionLinkOpensInPeek, boolean>;
        quickSuggestions: IEditorOption<EditorOption.quickSuggestions, ValidQuickSuggestionsOptions>;
        quickSuggestionsDelay: IEditorOption<EditorOption.quickSuggestionsDelay, number>;
        readOnly: IEditorOption<EditorOption.readOnly, boolean>;
        renameOnType: IEditorOption<EditorOption.renameOnType, boolean>;
        renderControlCharacters: IEditorOption<EditorOption.renderControlCharacters, boolean>;
        renderIndentGuides: IEditorOption<EditorOption.renderIndentGuides, boolean>;
        renderFinalNewline: IEditorOption<EditorOption.renderFinalNewline, boolean>;
        renderLineHighlight: IEditorOption<EditorOption.renderLineHighlight, 'all' | 'line' | 'none' | 'gutter'>;
        renderLineHighlightOnlyWhenFocus: IEditorOption<EditorOption.renderLineHighlightOnlyWhenFocus, boolean>;
        renderValidationDecorations: IEditorOption<EditorOption.renderValidationDecorations, 'on' | 'off' | 'editable'>;
        renderWhitespace: IEditorOption<EditorOption.renderWhitespace, 'all' | 'none' | 'boundary' | 'selection' | 'trailing'>;
        revealHorizontalRightPadding: IEditorOption<EditorOption.revealHorizontalRightPadding, number>;
        roundedSelection: IEditorOption<EditorOption.roundedSelection, boolean>;
        rulers: IEditorOption<EditorOption.rulers, {}>;
        scrollbar: IEditorOption<EditorOption.scrollbar, InternalEditorScrollbarOptions>;
        scrollBeyondLastColumn: IEditorOption<EditorOption.scrollBeyondLastColumn, number>;
        scrollBeyondLastLine: IEditorOption<EditorOption.scrollBeyondLastLine, boolean>;
        scrollPredominantAxis: IEditorOption<EditorOption.scrollPredominantAxis, boolean>;
        selectionClipboard: IEditorOption<EditorOption.selectionClipboard, boolean>;
        selectionHighlight: IEditorOption<EditorOption.selectionHighlight, boolean>;
        selectOnLineNumbers: IEditorOption<EditorOption.selectOnLineNumbers, boolean>;
        showFoldingControls: IEditorOption<EditorOption.showFoldingControls, 'always' | 'mouseover'>;
        showUnused: IEditorOption<EditorOption.showUnused, boolean>;
        showDeprecated: IEditorOption<EditorOption.showDeprecated, boolean>;
        inlineHints: IEditorOption<EditorOption.inlineHints, any>;
        snippetSuggestions: IEditorOption<EditorOption.snippetSuggestions, 'none' | 'top' | 'bottom' | 'inline'>;
        smartSelect: IEditorOption<EditorOption.smartSelect, any>;
        smoothScrolling: IEditorOption<EditorOption.smoothScrolling, boolean>;
        stopRenderingLineAfter: IEditorOption<EditorOption.stopRenderingLineAfter, number>;
        suggest: IEditorOption<EditorOption.suggest, InternalSuggestOptions>;
        suggestFontSize: IEditorOption<EditorOption.suggestFontSize, number>;
        suggestLineHeight: IEditorOption<EditorOption.suggestLineHeight, number>;
        suggestOnTriggerCharacters: IEditorOption<EditorOption.suggestOnTriggerCharacters, boolean>;
        suggestSelection: IEditorOption<EditorOption.suggestSelection, 'first' | 'recentlyUsed' | 'recentlyUsedByPrefix'>;
        tabCompletion: IEditorOption<EditorOption.tabCompletion, 'on' | 'off' | 'onlySnippets'>;
        tabIndex: IEditorOption<EditorOption.tabIndex, number>;
        unusualLineTerminators: IEditorOption<EditorOption.unusualLineTerminators, 'auto' | 'off' | 'prompt'>;
        useShadowDOM: IEditorOption<EditorOption.useShadowDOM, boolean>;
        useTabStops: IEditorOption<EditorOption.useTabStops, boolean>;
        wordSeparators: IEditorOption<EditorOption.wordSeparators, string>;
        wordWrap: IEditorOption<EditorOption.wordWrap, 'on' | 'off' | 'wordWrapColumn' | 'bounded'>;
        wordWrapBreakAfterCharacters: IEditorOption<EditorOption.wordWrapBreakAfterCharacters, string>;
        wordWrapBreakBeforeCharacters: IEditorOption<EditorOption.wordWrapBreakBeforeCharacters, string>;
        wordWrapColumn: IEditorOption<EditorOption.wordWrapColumn, number>;
        wordWrapOverride1: IEditorOption<EditorOption.wordWrapOverride1, 'on' | 'off' | 'inherit'>;
        wordWrapOverride2: IEditorOption<EditorOption.wordWrapOverride2, 'on' | 'off' | 'inherit'>;
        wrappingIndent: IEditorOption<EditorOption.wrappingIndent, WrappingIndent>;
        wrappingStrategy: IEditorOption<EditorOption.wrappingStrategy, 'simple' | 'advanced'>;
        editorClassName: IEditorOption<EditorOption.editorClassName, string>;
        pixelRatio: IEditorOption<EditorOption.pixelRatio, number>;
        tabFocusMode: IEditorOption<EditorOption.tabFocusMode, boolean>;
        layoutInfo: IEditorOption<EditorOption.layoutInfo, EditorLayoutInfo>;
        wrappingInfo: IEditorOption<EditorOption.wrappingInfo, EditorWrappingInfo>;
    };
    type EditorOptionsType = typeof EditorOptions;
    type FindEditorOptionsKeyById<T extends EditorOption> = {
        [K in keyof EditorOptionsType]: EditorOptionsType[K]['id'] extends T ? K : never;
    }[keyof EditorOptionsType];
    type ComputedEditorOptionValue<T extends IEditorOption<any, any>> = T extends IEditorOption<any, infer R> ? R : never;
    export type FindComputedEditorOptionValueById<T extends EditorOption> = NonNullable<ComputedEditorOptionValue<EditorOptionsType[FindEditorOptionsKeyById<T>]>>;
    export interface IViewZone {
        afterLineNumber: number;
        afterColumn?: number;
        suppressMouseDown?: boolean;
        heightInLines?: number;
        heightInPx?: number;
        minWidthInPx?: number;
        domNode: HTMLElement;
        marginDomNode?: HTMLElement | null;
        onDomNodeTop?: (top: number) => void;
        onComputedHeight?: (height: number) => void;
    }
    export interface IViewZoneChangeAccessor {
        addZone(zone: IViewZone): string;
        removeZone(id: string): void;
        layoutZone(id: string): void;
    }
    export enum ContentWidgetPositionPreference {
        EXACT = 0,
        ABOVE = 1,
        BELOW = 2
    }
    export interface IContentWidgetPosition {
        position: IPosition | null;
        range?: IRange | null;
        preference: ContentWidgetPositionPreference[];
    }
    export interface IContentWidget {
        allowEditorOverflow?: boolean;
        suppressMouseDown?: boolean;
        getId(): string;
        getDomNode(): HTMLElement;
        getPosition(): IContentWidgetPosition | null;
        beforeRender?(): IDimension | null;
        afterRender?(position: ContentWidgetPositionPreference | null): void;
    }
    export enum OverlayWidgetPositionPreference {
        TOP_RIGHT_CORNER = 0,
        BOTTOM_RIGHT_CORNER = 1,
        TOP_CENTER = 2
    }
    export interface IOverlayWidgetPosition {
        preference: OverlayWidgetPositionPreference | null;
    }
    export interface IOverlayWidget {
        getId(): string;
        getDomNode(): HTMLElement;
        getPosition(): IOverlayWidgetPosition | null;
    }
    export enum MouseTargetType {
        UNKNOWN = 0,
        TEXTAREA = 1,
        GUTTER_GLYPH_MARGIN = 2,
        GUTTER_LINE_NUMBERS = 3,
        GUTTER_LINE_DECORATIONS = 4,
        GUTTER_VIEW_ZONE = 5,
        CONTENT_TEXT = 6,
        CONTENT_EMPTY = 7,
        CONTENT_VIEW_ZONE = 8,
        CONTENT_WIDGET = 9,
        OVERVIEW_RULER = 10,
        SCROLLBAR = 11,
        OVERLAY_WIDGET = 12,
        OUTSIDE_EDITOR = 13
    }
    export interface IMouseTarget {
        readonly element: Element | null;
        readonly type: MouseTargetType;
        readonly position: Position | null;
        readonly mouseColumn: number;
        readonly range: Range | null;
        readonly detail: any;
    }
    export interface IEditorMouseEvent {
        readonly event: IMouseEvent;
        readonly target: IMouseTarget;
    }
    export interface IPartialEditorMouseEvent {
        readonly event: IMouseEvent;
        readonly target: IMouseTarget | null;
    }
    export interface IPasteEvent {
        readonly range: Range;
        readonly mode: string | null;
    }
    export interface IEditorConstructionOptions extends IEditorOptions {
        dimension?: IDimension;
        overflowWidgetsDomNode?: HTMLElement;
    }
    export interface IDiffEditorConstructionOptions extends IDiffEditorOptions {
        dimension?: IDimension;
        overflowWidgetsDomNode?: HTMLElement;
    }
    export interface ICodeEditor extends IEditor {
        onDidChangeModelContent(listener: (e: IModelContentChangedEvent) => void): IDisposable;
        onDidChangeModelLanguage(listener: (e: IModelLanguageChangedEvent) => void): IDisposable;
        onDidChangeModelLanguageConfiguration(listener: (e: IModelLanguageConfigurationChangedEvent) => void): IDisposable;
        onDidChangeModelOptions(listener: (e: IModelOptionsChangedEvent) => void): IDisposable;
        onDidChangeConfiguration(listener: (e: ConfigurationChangedEvent) => void): IDisposable;
        onDidChangeCursorPosition(listener: (e: ICursorPositionChangedEvent) => void): IDisposable;
        onDidChangeCursorSelection(listener: (e: ICursorSelectionChangedEvent) => void): IDisposable;
        onDidChangeModel(listener: (e: IModelChangedEvent) => void): IDisposable;
        onDidChangeModelDecorations(listener: (e: IModelDecorationsChangedEvent) => void): IDisposable;
        onDidFocusEditorText(listener: () => void): IDisposable;
        onDidBlurEditorText(listener: () => void): IDisposable;
        onDidFocusEditorWidget(listener: () => void): IDisposable;
        onDidBlurEditorWidget(listener: () => void): IDisposable;
        onDidCompositionStart(listener: () => void): IDisposable;
        onDidCompositionEnd(listener: () => void): IDisposable;
        onDidAttemptReadOnlyEdit(listener: () => void): IDisposable;
        onDidPaste(listener: (e: IPasteEvent) => void): IDisposable;
        onMouseUp(listener: (e: IEditorMouseEvent) => void): IDisposable;
        onMouseDown(listener: (e: IEditorMouseEvent) => void): IDisposable;
        onContextMenu(listener: (e: IEditorMouseEvent) => void): IDisposable;
        onMouseMove(listener: (e: IEditorMouseEvent) => void): IDisposable;
        onMouseLeave(listener: (e: IPartialEditorMouseEvent) => void): IDisposable;
        onKeyUp(listener: (e: IKeyboardEvent) => void): IDisposable;
        onKeyDown(listener: (e: IKeyboardEvent) => void): IDisposable;
        onDidLayoutChange(listener: (e: EditorLayoutInfo) => void): IDisposable;
        onDidContentSizeChange(listener: (e: IContentSizeChangedEvent) => void): IDisposable;
        onDidScrollChange(listener: (e: IScrollEvent) => void): IDisposable;
        saveViewState(): ICodeEditorViewState | null;
        restoreViewState(state: ICodeEditorViewState): void;
        hasWidgetFocus(): boolean;
        getContribution<T extends IEditorContribution>(id: string): T;
        getModel(): ITextModel | null;
        setModel(model: ITextModel | null): void;
        getOptions(): IComputedEditorOptions;
        getOption<T extends EditorOption>(id: T): FindComputedEditorOptionValueById<T>;
        getRawOptions(): IEditorOptions;
        getValue(options?: {
            preserveBOM: boolean;
            lineEnding: string;
        }): string;
        setValue(newValue: string): void;
        getContentWidth(): number;
        getScrollWidth(): number;
        getScrollLeft(): number;
        getContentHeight(): number;
        getScrollHeight(): number;
        getScrollTop(): number;
        setScrollLeft(newScrollLeft: number, scrollType?: ScrollType): void;
        setScrollTop(newScrollTop: number, scrollType?: ScrollType): void;
        setScrollPosition(position: INewScrollPosition, scrollType?: ScrollType): void;
        getAction(id: string): IEditorAction;
        executeCommand(source: string | null | undefined, command: ICommand): void;
        pushUndoStop(): boolean;
        popUndoStop(): boolean;
        executeEdits(source: string | null | undefined, edits: IIdentifiedSingleEditOperation[], endCursorState?: ICursorStateComputer | Selection[]): boolean;
        executeCommands(source: string | null | undefined, commands: (ICommand | null)[]): void;
        getLineDecorations(lineNumber: number): IModelDecoration[] | null;
        deltaDecorations(oldDecorations: string[], newDecorations: IModelDeltaDecoration[]): string[];
        getLayoutInfo(): EditorLayoutInfo;
        getVisibleRanges(): Range[];
        getTopForLineNumber(lineNumber: number): number;
        getTopForPosition(lineNumber: number, column: number): number;
        getContainerDomNode(): HTMLElement;
        getDomNode(): HTMLElement | null;
        addContentWidget(widget: IContentWidget): void;
        layoutContentWidget(widget: IContentWidget): void;
        removeContentWidget(widget: IContentWidget): void;
        addOverlayWidget(widget: IOverlayWidget): void;
        layoutOverlayWidget(widget: IOverlayWidget): void;
        removeOverlayWidget(widget: IOverlayWidget): void;
        changeViewZones(callback: (accessor: IViewZoneChangeAccessor) => void): void;
        getOffsetForColumn(lineNumber: number, column: number): number;
        render(forceRedraw?: boolean): void;
        getTargetAtClientPoint(clientX: number, clientY: number): IMouseTarget | null;
        getScrolledVisiblePosition(position: IPosition): {
            top: number;
            left: number;
            height: number;
        } | null;
        applyFontInfo(target: HTMLElement): void;
    }
    export interface IDiffLineInformation {
        readonly equivalentLineNumber: number;
    }
    export interface IDiffEditor extends IEditor {
        getDomNode(): HTMLElement;
        onDidUpdateDiff(listener: () => void): IDisposable;
        saveViewState(): IDiffEditorViewState | null;
        restoreViewState(state: IDiffEditorViewState): void;
        getModel(): IDiffEditorModel | null;
        setModel(model: IDiffEditorModel | null): void;
        getOriginalEditor(): ICodeEditor;
        getModifiedEditor(): ICodeEditor;
        getLineChanges(): ILineChange[] | null;
        getDiffLineInformationForOriginal(lineNumber: number): IDiffLineInformation | null;
        getDiffLineInformationForModified(lineNumber: number): IDiffLineInformation | null;
        updateOptions(newOptions: IDiffEditorOptions): void;
    }
    export class FontInfo extends BareFontInfo {
        readonly _editorStylingBrand: void;
        readonly version: number;
        readonly isTrusted: boolean;
        readonly isMonospace: boolean;
        readonly typicalHalfwidthCharacterWidth: number;
        readonly typicalFullwidthCharacterWidth: number;
        readonly canUseHalfwidthRightwardsArrow: boolean;
        readonly spaceWidth: number;
        readonly middotWidth: number;
        readonly wsmiddotWidth: number;
        readonly maxDigitWidth: number;
    }
    export class BareFontInfo {
        readonly _bareFontInfoBrand: void;
        readonly zoomLevel: number;
        readonly pixelRatio: number;
        readonly fontFamily: string;
        readonly fontWeight: string;
        readonly fontSize: number;
        readonly fontFeatureSettings: string;
        readonly lineHeight: number;
        readonly letterSpacing: number;
    }
    export type IReadOnlyModel = ITextModel;
    export type IModel = ITextModel;
}
declare namespace monaco.languages {
    export function register(language: ILanguageExtensionPoint): void;
    export function getLanguages(): ILanguageExtensionPoint[];
    export function getEncodedLanguageId(languageId: string): number;
    export function onLanguage(languageId: string, callback: () => void): IDisposable;
    export function setLanguageConfiguration(languageId: string, configuration: LanguageConfiguration): IDisposable;
    export interface IToken {
        startIndex: number;
        scopes: string;
    }
    export interface ILineTokens {
        tokens: IToken[];
        endState: IState;
    }
    export interface IEncodedLineTokens {
        tokens: Uint32Array;
        endState: IState;
    }
    export interface TokensProvider {
        getInitialState(): IState;
        tokenize(line: string, state: IState): ILineTokens;
    }
    export interface EncodedTokensProvider {
        getInitialState(): IState;
        tokenizeEncoded(line: string, state: IState): IEncodedLineTokens;
        tokenize?(line: string, state: IState): ILineTokens;
    }
    export function setColorMap(colorMap: string[] | null): void;
    export function setTokensProvider(languageId: string, provider: TokensProvider | EncodedTokensProvider | Thenable<TokensProvider | EncodedTokensProvider>): IDisposable;
    export function setMonarchTokensProvider(languageId: string, languageDef: IMonarchLanguage | Thenable<IMonarchLanguage>): IDisposable;
    export function registerReferenceProvider(languageId: string, provider: ReferenceProvider): IDisposable;
    export function registerRenameProvider(languageId: string, provider: RenameProvider): IDisposable;
    export function registerSignatureHelpProvider(languageId: string, provider: SignatureHelpProvider): IDisposable;
    export function registerHoverProvider(languageId: string, provider: HoverProvider): IDisposable;
    export function registerDocumentSymbolProvider(languageId: string, provider: DocumentSymbolProvider): IDisposable;
    export function registerDocumentHighlightProvider(languageId: string, provider: DocumentHighlightProvider): IDisposable;
    export function registerLinkedEditingRangeProvider(languageId: string, provider: LinkedEditingRangeProvider): IDisposable;
    export function registerDefinitionProvider(languageId: string, provider: DefinitionProvider): IDisposable;
    export function registerImplementationProvider(languageId: string, provider: ImplementationProvider): IDisposable;
    export function registerTypeDefinitionProvider(languageId: string, provider: TypeDefinitionProvider): IDisposable;
    export function registerCodeLensProvider(languageId: string, provider: CodeLensProvider): IDisposable;
    export function registerCodeActionProvider(languageId: string, provider: CodeActionProvider): IDisposable;
    export function registerDocumentFormattingEditProvider(languageId: string, provider: DocumentFormattingEditProvider): IDisposable;
    export function registerDocumentRangeFormattingEditProvider(languageId: string, provider: DocumentRangeFormattingEditProvider): IDisposable;
    export function registerOnTypeFormattingEditProvider(languageId: string, provider: OnTypeFormattingEditProvider): IDisposable;
    export function registerLinkProvider(languageId: string, provider: LinkProvider): IDisposable;
    export function registerCompletionItemProvider(languageId: string, provider: CompletionItemProvider): IDisposable;
    export function registerColorProvider(languageId: string, provider: DocumentColorProvider): IDisposable;
    export function registerFoldingRangeProvider(languageId: string, provider: FoldingRangeProvider): IDisposable;
    export function registerDeclarationProvider(languageId: string, provider: DeclarationProvider): IDisposable;
    export function registerSelectionRangeProvider(languageId: string, provider: SelectionRangeProvider): IDisposable;
    export function registerDocumentSemanticTokensProvider(languageId: string, provider: DocumentSemanticTokensProvider): IDisposable;
    export function registerDocumentRangeSemanticTokensProvider(languageId: string, provider: DocumentRangeSemanticTokensProvider): IDisposable;
    export interface CodeActionContext {
        readonly markers: editor.IMarkerData[];
        readonly only?: string;
    }
    export interface CodeActionProvider {
        provideCodeActions(model: editor.ITextModel, range: Range, context: CodeActionContext, token: CancellationToken): ProviderResult<CodeActionList>;
    }
    export interface CommentRule {
        lineComment?: string | null;
        blockComment?: CharacterPair | null;
    }
    export interface LanguageConfiguration {
        comments?: CommentRule;
        brackets?: CharacterPair[];
        wordPattern?: RegExp;
        indentationRules?: IndentationRule;
        onEnterRules?: OnEnterRule[];
        autoClosingPairs?: IAutoClosingPairConditional[];
        surroundingPairs?: IAutoClosingPair[];
        autoCloseBefore?: string;
        folding?: FoldingRules;
        __electricCharacterSupport?: {
            docComment?: IDocComment;
        };
    }
    export interface IndentationRule {
        decreaseIndentPattern: RegExp;
        increaseIndentPattern: RegExp;
        indentNextLinePattern?: RegExp | null;
        unIndentedLinePattern?: RegExp | null;
    }
    export interface FoldingMarkers {
        start: RegExp;
        end: RegExp;
    }
    export interface FoldingRules {
        offSide?: boolean;
        markers?: FoldingMarkers;
    }
    export interface OnEnterRule {
        beforeText: RegExp;
        afterText?: RegExp;
        previousLineText?: RegExp;
        action: EnterAction;
    }
    export interface IDocComment {
        open: string;
        close?: string;
    }
    export type CharacterPair = [string, string];
    export interface IAutoClosingPair {
        open: string;
        close: string;
    }
    export interface IAutoClosingPairConditional extends IAutoClosingPair {
        notIn?: string[];
    }
    export enum IndentAction {
        None = 0,
        Indent = 1,
        IndentOutdent = 2,
        Outdent = 3
    }
    export interface EnterAction {
        indentAction: IndentAction;
        appendText?: string;
        removeText?: number;
    }
    export interface IState {
        clone(): IState;
        equals(other: IState): boolean;
    }
    export type ProviderResult<T> = T | undefined | null | Thenable<T | undefined | null>;
    export interface Hover {
        contents: IMarkdownString[];
        range?: IRange;
    }
    export interface HoverProvider {
        provideHover(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<Hover>;
    }
    export enum CompletionItemKind {
        Method = 0,
        Function = 1,
        Constructor = 2,
        Field = 3,
        Variable = 4,
        Class = 5,
        Struct = 6,
        Interface = 7,
        Module = 8,
        Property = 9,
        Event = 10,
        Operator = 11,
        Unit = 12,
        Value = 13,
        Constant = 14,
        Enum = 15,
        EnumMember = 16,
        Keyword = 17,
        Text = 18,
        Color = 19,
        File = 20,
        Reference = 21,
        Customcolor = 22,
        Folder = 23,
        TypeParameter = 24,
        User = 25,
        Issue = 26,
        Snippet = 27
    }
    export interface CompletionItemLabel {
        name: string;
        parameters?: string;
        qualifier?: string;
        type?: string;
    }
    export enum CompletionItemTag {
        Deprecated = 1
    }
    export enum CompletionItemInsertTextRule {
        KeepWhitespace = 1,
        InsertAsSnippet = 4
    }
    export interface CompletionItem {
        label: string | CompletionItemLabel;
        kind: CompletionItemKind;
        tags?: ReadonlyArray<CompletionItemTag>;
        detail?: string;
        documentation?: string | IMarkdownString;
        sortText?: string;
        filterText?: string;
        preselect?: boolean;
        insertText: string;
        insertTextRules?: CompletionItemInsertTextRule;
        range: IRange | {
            insert: IRange;
            replace: IRange;
        };
        commitCharacters?: string[];
        additionalTextEdits?: editor.ISingleEditOperation[];
        command?: Command;
    }
    export interface CompletionList {
        suggestions: CompletionItem[];
        incomplete?: boolean;
        dispose?(): void;
    }
    export enum CompletionTriggerKind {
        Invoke = 0,
        TriggerCharacter = 1,
        TriggerForIncompleteCompletions = 2
    }
    export interface CompletionContext {
        triggerKind: CompletionTriggerKind;
        triggerCharacter?: string;
    }
    export interface CompletionItemProvider {
        triggerCharacters?: string[];
        provideCompletionItems(model: editor.ITextModel, position: Position, context: CompletionContext, token: CancellationToken): ProviderResult<CompletionList>;
        resolveCompletionItem?(item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem>;
    }
    export interface CodeAction {
        title: string;
        command?: Command;
        edit?: WorkspaceEdit;
        diagnostics?: editor.IMarkerData[];
        kind?: string;
        isPreferred?: boolean;
        disabled?: string;
    }
    export interface CodeActionList extends IDisposable {
        readonly actions: ReadonlyArray<CodeAction>;
    }
    export interface ParameterInformation {
        label: string | [number, number];
        documentation?: string | IMarkdownString;
    }
    export interface SignatureInformation {
        label: string;
        documentation?: string | IMarkdownString;
        parameters: ParameterInformation[];
        activeParameter?: number;
    }
    export interface SignatureHelp {
        signatures: SignatureInformation[];
        activeSignature: number;
        activeParameter: number;
    }
    export interface SignatureHelpResult extends IDisposable {
        value: SignatureHelp;
    }
    export enum SignatureHelpTriggerKind {
        Invoke = 1,
        TriggerCharacter = 2,
        ContentChange = 3
    }
    export interface SignatureHelpContext {
        readonly triggerKind: SignatureHelpTriggerKind;
        readonly triggerCharacter?: string;
        readonly isRetrigger: boolean;
        readonly activeSignatureHelp?: SignatureHelp;
    }
    export interface SignatureHelpProvider {
        readonly signatureHelpTriggerCharacters?: ReadonlyArray<string>;
        readonly signatureHelpRetriggerCharacters?: ReadonlyArray<string>;
        provideSignatureHelp(model: editor.ITextModel, position: Position, token: CancellationToken, context: SignatureHelpContext): ProviderResult<SignatureHelpResult>;
    }
    export enum DocumentHighlightKind {
        Text = 0,
        Read = 1,
        Write = 2
    }
    export interface DocumentHighlight {
        range: IRange;
        kind?: DocumentHighlightKind;
    }
    export interface DocumentHighlightProvider {
        provideDocumentHighlights(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<DocumentHighlight[]>;
    }
    export interface LinkedEditingRangeProvider {
        provideLinkedEditingRanges(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<LinkedEditingRanges>;
    }
    export interface LinkedEditingRanges {
        ranges: IRange[];
        wordPattern?: RegExp;
    }
    export interface ReferenceContext {
        includeDeclaration: boolean;
    }
    export interface ReferenceProvider {
        provideReferences(model: editor.ITextModel, position: Position, context: ReferenceContext, token: CancellationToken): ProviderResult<Location[]>;
    }
    export interface Location {
        uri: Uri;
        range: IRange;
    }
    export interface LocationLink {
        originSelectionRange?: IRange;
        uri: Uri;
        range: IRange;
        targetSelectionRange?: IRange;
    }
    export type Definition = Location | Location[] | LocationLink[];
    export interface DefinitionProvider {
        provideDefinition(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<Definition | LocationLink[]>;
    }
    export interface DeclarationProvider {
        provideDeclaration(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<Definition | LocationLink[]>;
    }
    export interface ImplementationProvider {
        provideImplementation(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<Definition | LocationLink[]>;
    }
    export interface TypeDefinitionProvider {
        provideTypeDefinition(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<Definition | LocationLink[]>;
    }
    export enum SymbolKind {
        File = 0,
        Module = 1,
        Namespace = 2,
        Package = 3,
        Class = 4,
        Method = 5,
        Property = 6,
        Field = 7,
        Constructor = 8,
        Enum = 9,
        Interface = 10,
        Function = 11,
        Variable = 12,
        Constant = 13,
        String = 14,
        Number = 15,
        Boolean = 16,
        Array = 17,
        Object = 18,
        Key = 19,
        Null = 20,
        EnumMember = 21,
        Struct = 22,
        Event = 23,
        Operator = 24,
        TypeParameter = 25
    }
    export enum SymbolTag {
        Deprecated = 1
    }
    export interface DocumentSymbol {
        name: string;
        detail: string;
        kind: SymbolKind;
        tags: ReadonlyArray<SymbolTag>;
        containerName?: string;
        range: IRange;
        selectionRange: IRange;
        children?: DocumentSymbol[];
    }
    export interface DocumentSymbolProvider {
        displayName?: string;
        provideDocumentSymbols(model: editor.ITextModel, token: CancellationToken): ProviderResult<DocumentSymbol[]>;
    }
    export type TextEdit = {
        range: IRange;
        text: string;
        eol?: editor.EndOfLineSequence;
    };
    export interface FormattingOptions {
        tabSize: number;
        insertSpaces: boolean;
    }
    export interface DocumentFormattingEditProvider {
        readonly displayName?: string;
        provideDocumentFormattingEdits(model: editor.ITextModel, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]>;
    }
    export interface DocumentRangeFormattingEditProvider {
        readonly displayName?: string;
        provideDocumentRangeFormattingEdits(model: editor.ITextModel, range: Range, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]>;
    }
    export interface OnTypeFormattingEditProvider {
        autoFormatTriggerCharacters: string[];
        provideOnTypeFormattingEdits(model: editor.ITextModel, position: Position, ch: string, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]>;
    }
    export interface ILink {
        range: IRange;
        url?: Uri | string;
        tooltip?: string;
    }
    export interface ILinksList {
        links: ILink[];
        dispose?(): void;
    }
    export interface LinkProvider {
        provideLinks(model: editor.ITextModel, token: CancellationToken): ProviderResult<ILinksList>;
        resolveLink?: (link: ILink, token: CancellationToken) => ProviderResult<ILink>;
    }
    export interface IColor {
        readonly red: number;
        readonly green: number;
        readonly blue: number;
        readonly alpha: number;
    }
    export interface IColorPresentation {
        label: string;
        textEdit?: TextEdit;
        additionalTextEdits?: TextEdit[];
    }
    export interface IColorInformation {
        range: IRange;
        color: IColor;
    }
    export interface DocumentColorProvider {
        provideDocumentColors(model: editor.ITextModel, token: CancellationToken): ProviderResult<IColorInformation[]>;
        provideColorPresentations(model: editor.ITextModel, colorInfo: IColorInformation, token: CancellationToken): ProviderResult<IColorPresentation[]>;
    }
    export interface SelectionRange {
        range: IRange;
    }
    export interface SelectionRangeProvider {
        provideSelectionRanges(model: editor.ITextModel, positions: Position[], token: CancellationToken): ProviderResult<SelectionRange[][]>;
    }
    export interface FoldingContext {
    }
    export interface FoldingRangeProvider {
        onDidChange?: IEvent<this>;
        provideFoldingRanges(model: editor.ITextModel, context: FoldingContext, token: CancellationToken): ProviderResult<FoldingRange[]>;
    }
    export interface FoldingRange {
        start: number;
        end: number;
        kind?: FoldingRangeKind;
    }
    export class FoldingRangeKind {
        value: string;
        static readonly Comment: FoldingRangeKind;
        static readonly Imports: FoldingRangeKind;
        static readonly Region: FoldingRangeKind;
        constructor(value: string);
    }
    export interface WorkspaceEditMetadata {
        needsConfirmation: boolean;
        label: string;
        description?: string;
    }
    export interface WorkspaceFileEditOptions {
        overwrite?: boolean;
        ignoreIfNotExists?: boolean;
        ignoreIfExists?: boolean;
        recursive?: boolean;
        copy?: boolean;
        folder?: boolean;
        skipTrashBin?: boolean;
        maxSize?: number;
    }
    export interface WorkspaceFileEdit {
        oldUri?: Uri;
        newUri?: Uri;
        options?: WorkspaceFileEditOptions;
        metadata?: WorkspaceEditMetadata;
    }
    export interface WorkspaceTextEdit {
        resource: Uri;
        edit: TextEdit;
        modelVersionId?: number;
        metadata?: WorkspaceEditMetadata;
    }
    export interface WorkspaceEdit {
        edits: Array<WorkspaceTextEdit | WorkspaceFileEdit>;
    }
    export interface Rejection {
        rejectReason?: string;
    }
    export interface RenameLocation {
        range: IRange;
        text: string;
    }
    export interface RenameProvider {
        provideRenameEdits(model: editor.ITextModel, position: Position, newName: string, token: CancellationToken): ProviderResult<WorkspaceEdit & Rejection>;
        resolveRenameLocation?(model: editor.ITextModel, position: Position, token: CancellationToken): ProviderResult<RenameLocation & Rejection>;
    }
    export interface Command {
        id: string;
        title: string;
        tooltip?: string;
        arguments?: any[];
    }
    export interface CodeLens {
        range: IRange;
        id?: string;
        command?: Command;
    }
    export interface CodeLensList {
        lenses: CodeLens[];
        dispose(): void;
    }
    export interface CodeLensProvider {
        onDidChange?: IEvent<this>;
        provideCodeLenses(model: editor.ITextModel, token: CancellationToken): ProviderResult<CodeLensList>;
        resolveCodeLens?(model: editor.ITextModel, codeLens: CodeLens, token: CancellationToken): ProviderResult<CodeLens>;
    }
    export enum InlineHintKind {
        Other = 0,
        Type = 1,
        Parameter = 2
    }
    export interface InlineHint {
        text: string;
        range: IRange;
        kind: InlineHintKind;
        description?: string | IMarkdownString;
        whitespaceBefore?: boolean;
        whitespaceAfter?: boolean;
    }
    export interface InlineHintsProvider {
        onDidChangeInlineHints?: IEvent<void> | undefined;
        provideInlineHints(model: editor.ITextModel, range: Range, token: CancellationToken): ProviderResult<InlineHint[]>;
    }
    export interface SemanticTokensLegend {
        readonly tokenTypes: string[];
        readonly tokenModifiers: string[];
    }
    export interface SemanticTokens {
        readonly resultId?: string;
        readonly data: Uint32Array;
    }
    export interface SemanticTokensEdit {
        readonly start: number;
        readonly deleteCount: number;
        readonly data?: Uint32Array;
    }
    export interface SemanticTokensEdits {
        readonly resultId?: string;
        readonly edits: SemanticTokensEdit[];
    }
    export interface DocumentSemanticTokensProvider {
        onDidChange?: IEvent<void>;
        getLegend(): SemanticTokensLegend;
        provideDocumentSemanticTokens(model: editor.ITextModel, lastResultId: string | null, token: CancellationToken): ProviderResult<SemanticTokens | SemanticTokensEdits>;
        releaseDocumentSemanticTokens(resultId: string | undefined): void;
    }
    export interface DocumentRangeSemanticTokensProvider {
        getLegend(): SemanticTokensLegend;
        provideDocumentRangeSemanticTokens(model: editor.ITextModel, range: Range, token: CancellationToken): ProviderResult<SemanticTokens>;
    }
    export interface ILanguageExtensionPoint {
        id: string;
        extensions?: string[];
        filenames?: string[];
        filenamePatterns?: string[];
        firstLine?: string;
        aliases?: string[];
        mimetypes?: string[];
        configuration?: Uri;
    }
    export interface IMonarchLanguage {
        tokenizer: {
            [name: string]: IMonarchLanguageRule[];
        };
        ignoreCase?: boolean;
        unicode?: boolean;
        defaultToken?: string;
        brackets?: IMonarchLanguageBracket[];
        start?: string;
        tokenPostfix?: string;
        includeLF?: boolean;
        [key: string]: any;
    }
    export type IShortMonarchLanguageRule1 = [string | RegExp, IMonarchLanguageAction];
    export type IShortMonarchLanguageRule2 = [string | RegExp, IMonarchLanguageAction, string];
    export interface IExpandedMonarchLanguageRule {
        regex?: string | RegExp;
        action?: IMonarchLanguageAction;
        include?: string;
    }
    export type IMonarchLanguageRule = IShortMonarchLanguageRule1 | IShortMonarchLanguageRule2 | IExpandedMonarchLanguageRule;
    export type IShortMonarchLanguageAction = string;
    export interface IExpandedMonarchLanguageAction {
        group?: IMonarchLanguageAction[];
        cases?: Object;
        token?: string;
        next?: string;
        switchTo?: string;
        goBack?: number;
        bracket?: string;
        nextEmbedded?: string;
        log?: string;
    }
    export type IMonarchLanguageAction = IShortMonarchLanguageAction | IExpandedMonarchLanguageAction | IShortMonarchLanguageAction[] | IExpandedMonarchLanguageAction[];
    export interface IMonarchLanguageBracket {
        open: string;
        close: string;
        token: string;
    }
}
declare namespace monaco.worker {
    export interface IMirrorTextModel {
        readonly version: number;
    }
    export interface IMirrorModel extends IMirrorTextModel {
        readonly uri: Uri;
        readonly version: number;
        getValue(): string;
    }
    export interface IWorkerContext<H = undefined> {
        host: H;
        getMirrorModels(): IMirrorModel[];
    }
}
declare namespace monaco.languages.typescript {
    export enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
        UMD = 3,
        System = 4,
        ES2015 = 5,
        ESNext = 99
    }
    export enum JsxEmit {
        None = 0,
        Preserve = 1,
        React = 2,
        ReactNative = 3,
        ReactJSX = 4,
        ReactJSXDev = 5
    }
    export enum NewLineKind {
        CarriageReturnLineFeed = 0,
        LineFeed = 1
    }
    export enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
        ES2015 = 2,
        ES2016 = 3,
        ES2017 = 4,
        ES2018 = 5,
        ES2019 = 6,
        ES2020 = 7,
        ESNext = 99,
        JSON = 100,
        Latest = 99
    }
    export enum ModuleResolutionKind {
        Classic = 1,
        NodeJs = 2
    }
    interface MapLike<T> {
        [index: string]: T;
    }
    type CompilerOptionsValue =
        | string
        | number
        | boolean
        | (string | number)[]
        | string[]
        | MapLike<string[]>
        | null
        | undefined;
    interface CompilerOptions {
        allowJs?: boolean;
        allowSyntheticDefaultImports?: boolean;
        allowUmdGlobalAccess?: boolean;
        allowUnreachableCode?: boolean;
        allowUnusedLabels?: boolean;
        alwaysStrict?: boolean;
        baseUrl?: string;
        charset?: string;
        checkJs?: boolean;
        declaration?: boolean;
        declarationMap?: boolean;
        emitDeclarationOnly?: boolean;
        declarationDir?: string;
        disableSizeLimit?: boolean;
        disableSourceOfProjectReferenceRedirect?: boolean;
        downlevelIteration?: boolean;
        emitBOM?: boolean;
        emitDecoratorMetadata?: boolean;
        experimentalDecorators?: boolean;
        forceConsistentCasingInFileNames?: boolean;
        importHelpers?: boolean;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        isolatedModules?: boolean;
        jsx?: JsxEmit;
        keyofStringsOnly?: boolean;
        lib?: string[];
        locale?: string;
        mapRoot?: string;
        maxNodeModuleJsDepth?: number;
        module?: ModuleKind;
        moduleResolution?: ModuleResolutionKind;
        newLine?: NewLineKind;
        noEmit?: boolean;
        noEmitHelpers?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noFallthroughCasesInSwitch?: boolean;
        noImplicitAny?: boolean;
        noImplicitReturns?: boolean;
        noImplicitThis?: boolean;
        noStrictGenericChecks?: boolean;
        noUnusedLocals?: boolean;
        noUnusedParameters?: boolean;
        noImplicitUseStrict?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        outFile?: string;
        paths?: MapLike<string[]>;
        preserveConstEnums?: boolean;
        preserveSymlinks?: boolean;
        project?: string;
        reactNamespace?: string;
        jsxFactory?: string;
        composite?: boolean;
        removeComments?: boolean;
        rootDir?: string;
        rootDirs?: string[];
        skipLibCheck?: boolean;
        skipDefaultLibCheck?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        strict?: boolean;
        strictFunctionTypes?: boolean;
        strictBindCallApply?: boolean;
        strictNullChecks?: boolean;
        strictPropertyInitialization?: boolean;
        stripInternal?: boolean;
        suppressExcessPropertyErrors?: boolean;
        suppressImplicitAnyIndexErrors?: boolean;
        target?: ScriptTarget;
        traceResolution?: boolean;
        resolveJsonModule?: boolean;
        types?: string[];
        typeRoots?: string[];
        esModuleInterop?: boolean;
        useDefineForClassFields?: boolean;
        [option: string]: CompilerOptionsValue | undefined;
    }
    export interface DiagnosticsOptions {
        noSemanticValidation?: boolean;
        noSyntaxValidation?: boolean;
        noSuggestionDiagnostics?: boolean;
        onlyVisible?: boolean;
        diagnosticCodesToIgnore?: number[];
    }
    export interface WorkerOptions {
        customWorkerPath?: string;
    }
    interface IExtraLib {
        content: string;
        version: number;
    }
    export interface IExtraLibs {
        [path: string]: IExtraLib;
    }
    interface DiagnosticMessageChain {
        messageText: string;
        category: 0 | 1 | 2 | 3;
        code: number;
        next?: DiagnosticMessageChain[];
    }
    export interface Diagnostic extends DiagnosticRelatedInformation {
        reportsUnnecessary?: {};
        reportsDeprecated?: {};
        source?: string;
        relatedInformation?: DiagnosticRelatedInformation[];
    }
    export interface DiagnosticRelatedInformation {
        category: 0 | 1 | 2 | 3;
        code: number;
        file:
            | {
                    fileName: string;
              }
            | undefined;
        start: number | undefined;
        length: number | undefined;
        messageText: string | DiagnosticMessageChain;
    }
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitSkipped: boolean;
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
    export interface LanguageServiceDefaults {
        readonly onDidChange: IEvent<void>;
        readonly onDidExtraLibsChange: IEvent<void>;
        readonly workerOptions: WorkerOptions;
        getExtraLibs(): IExtraLibs;
        addExtraLib(content: string, filePath?: string): IDisposable;
        setExtraLibs(
            libs: {
                content: string;
                filePath?: string;
            }[]
        ): void;
        getCompilerOptions(): CompilerOptions;
        setCompilerOptions(options: CompilerOptions): void;
        getDiagnosticsOptions(): DiagnosticsOptions;
        setDiagnosticsOptions(options: DiagnosticsOptions): void;
        setWorkerOptions(options: WorkerOptions): void;
        setMaximumWorkerIdleTime(value: number): void;
        setEagerModelSync(value: boolean): void;
        getEagerModelSync(): boolean;
    }
    export interface TypeScriptWorker {
        getSyntacticDiagnostics(fileName: string): Promise<Diagnostic[]>;
        getSemanticDiagnostics(fileName: string): Promise<Diagnostic[]>;
        getSuggestionDiagnostics(fileName: string): Promise<Diagnostic[]>;
        getScriptText(fileName: string): Promise<string | undefined>;
        getCompilerOptionsDiagnostics(fileName: string): Promise<Diagnostic[]>;
        getCompletionsAtPosition(fileName: string, position: number): Promise<any | undefined>;
        getCompletionEntryDetails(
            fileName: string,
            position: number,
            entry: string
        ): Promise<any | undefined>;
        getSignatureHelpItems(
            fileName: string,
            position: number,
            options: any
        ): Promise<any | undefined>;
        getQuickInfoAtPosition(fileName: string, position: number): Promise<any | undefined>;
        getOccurrencesAtPosition(
            fileName: string,
            position: number
        ): Promise<ReadonlyArray<any> | undefined>;
        getDefinitionAtPosition(
            fileName: string,
            position: number
        ): Promise<ReadonlyArray<any> | undefined>;
        getReferencesAtPosition(fileName: string, position: number): Promise<any[] | undefined>;
        getNavigationBarItems(fileName: string): Promise<any[]>;
        getFormattingEditsForDocument(fileName: string, options: any): Promise<any[]>;
        getFormattingEditsForRange(
            fileName: string,
            start: number,
            end: number,
            options: any
        ): Promise<any[]>;
        getFormattingEditsAfterKeystroke(
            fileName: string,
            postion: number,
            ch: string,
            options: any
        ): Promise<any[]>;
        findRenameLocations(
            fileName: string,
            positon: number,
            findInStrings: boolean,
            findInComments: boolean,
            providePrefixAndSuffixTextForRename: boolean
        ): Promise<readonly any[] | undefined>;
        getRenameInfo(fileName: string, positon: number, options: any): Promise<any>;
        getEmitOutput(fileName: string): Promise<EmitOutput>;
        getCodeFixesAtPosition(
            fileName: string,
            start: number,
            end: number,
            errorCodes: number[],
            formatOptions: any
        ): Promise<ReadonlyArray<any>>;
    }
    export const typescriptVersion: string;
    export const typescriptDefaults: LanguageServiceDefaults;
    export const javascriptDefaults: LanguageServiceDefaults;
    export const getTypeScriptWorker: () => Promise<(...uris: Uri[]) => Promise<TypeScriptWorker>>;
    export const getJavaScriptWorker: () => Promise<(...uris: Uri[]) => Promise<TypeScriptWorker>>;
}

declare namespace monaco.languages.css {
    export interface DiagnosticsOptions {
        readonly validate?: boolean;
        readonly lint?: {
            readonly compatibleVendorPrefixes?: 'ignore' | 'warning' | 'error';
            readonly vendorPrefix?: 'ignore' | 'warning' | 'error';
            readonly duplicateProperties?: 'ignore' | 'warning' | 'error';
            readonly emptyRules?: 'ignore' | 'warning' | 'error';
            readonly importStatement?: 'ignore' | 'warning' | 'error';
            readonly boxModel?: 'ignore' | 'warning' | 'error';
            readonly universalSelector?: 'ignore' | 'warning' | 'error';
            readonly zeroUnits?: 'ignore' | 'warning' | 'error';
            readonly fontFaceProperties?: 'ignore' | 'warning' | 'error';
            readonly hexColorLength?: 'ignore' | 'warning' | 'error';
            readonly argumentsInColorFunction?: 'ignore' | 'warning' | 'error';
            readonly unknownProperties?: 'ignore' | 'warning' | 'error';
            readonly ieHack?: 'ignore' | 'warning' | 'error';
            readonly unknownVendorSpecificProperties?: 'ignore' | 'warning' | 'error';
            readonly propertyIgnoredDueToDisplay?: 'ignore' | 'warning' | 'error';
            readonly important?: 'ignore' | 'warning' | 'error';
            readonly float?: 'ignore' | 'warning' | 'error';
            readonly idSelector?: 'ignore' | 'warning' | 'error';
        };
    }
    export interface ModeConfiguration {
        readonly completionItems?: boolean;
        readonly hovers?: boolean;
        readonly documentSymbols?: boolean;
        readonly definitions?: boolean;
        readonly references?: boolean;
        readonly documentHighlights?: boolean;
        readonly rename?: boolean;
        readonly colors?: boolean;
        readonly foldingRanges?: boolean;
        readonly diagnostics?: boolean;
        readonly selectionRanges?: boolean;
    }
    export interface LanguageServiceDefaults {
        readonly languageId: string;
        readonly onDidChange: IEvent<LanguageServiceDefaults>;
        readonly diagnosticsOptions: DiagnosticsOptions;
        readonly modeConfiguration: ModeConfiguration;
        setDiagnosticsOptions(options: DiagnosticsOptions): void;
        setModeConfiguration(modeConfiguration: ModeConfiguration): void;
    }
    export const cssDefaults: LanguageServiceDefaults;
    export const scssDefaults: LanguageServiceDefaults;
    export const lessDefaults: LanguageServiceDefaults;
}
declare namespace monaco.languages.json {
    export interface DiagnosticsOptions {
        readonly validate?: boolean;
        readonly allowComments?: boolean;
        readonly schemas?: {
            readonly uri: string;
            readonly fileMatch?: string[];
            readonly schema?: any;
        }[];
        readonly enableSchemaRequest?: boolean;
        readonly schemaValidation?: SeverityLevel;
        readonly schemaRequest?: SeverityLevel;
        readonly trailingCommas?: SeverityLevel;
        readonly comments?: SeverityLevel;
    }
    export type SeverityLevel = 'error' | 'warning' | 'ignore';
    export interface ModeConfiguration {
        readonly documentFormattingEdits?: boolean;
        readonly documentRangeFormattingEdits?: boolean;
        readonly completionItems?: boolean;
        readonly hovers?: boolean;
        readonly documentSymbols?: boolean;
        readonly tokens?: boolean;
        readonly colors?: boolean;
        readonly foldingRanges?: boolean;
        readonly diagnostics?: boolean;
        readonly selectionRanges?: boolean;
    }
    export interface LanguageServiceDefaults {
        readonly languageId: string;
        readonly onDidChange: IEvent<LanguageServiceDefaults>;
        readonly diagnosticsOptions: DiagnosticsOptions;
        readonly modeConfiguration: ModeConfiguration;
        setDiagnosticsOptions(options: DiagnosticsOptions): void;
        setModeConfiguration(modeConfiguration: ModeConfiguration): void;
    }
    export const jsonDefaults: LanguageServiceDefaults;
}



declare namespace monaco.languages.html {
    export interface HTMLFormatConfiguration {
        readonly tabSize: number;
        readonly insertSpaces: boolean;
        readonly wrapLineLength: number;
        readonly unformatted: string;
        readonly contentUnformatted: string;
        readonly indentInnerHtml: boolean;
        readonly preserveNewLines: boolean;
        readonly maxPreserveNewLines: number;
        readonly indentHandlebars: boolean;
        readonly endWithNewline: boolean;
        readonly extraLiners: string;
        readonly wrapAttributes: 'auto' | 'force' | 'force-aligned' | 'force-expand-multiline';
    }
    export interface CompletionConfiguration {
        [provider: string]: boolean;
    }
    export interface Options {
        readonly format?: HTMLFormatConfiguration;
        readonly suggest?: CompletionConfiguration;
    }
    export interface ModeConfiguration {
        readonly completionItems?: boolean;
        readonly hovers?: boolean;
        readonly documentSymbols?: boolean;
        readonly links?: boolean;
        readonly documentHighlights?: boolean;
        readonly rename?: boolean;
        readonly colors?: boolean;
        readonly foldingRanges?: boolean;
        readonly diagnostics?: boolean;
        readonly selectionRanges?: boolean;
        readonly documentFormattingEdits?: boolean;
        readonly documentRangeFormattingEdits?: boolean;
    }
    export interface LanguageServiceDefaults {
        readonly languageId: string;
        readonly modeConfiguration: ModeConfiguration;
        readonly onDidChange: IEvent<LanguageServiceDefaults>;
        readonly options: Options;
        setOptions(options: Options): void;
    }
    export const htmlDefaults: LanguageServiceDefaults;
    export const handlebarDefaults: LanguageServiceDefaults;
    export const razorDefaults: LanguageServiceDefaults;
}