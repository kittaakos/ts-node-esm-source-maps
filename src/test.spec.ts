import Uri from 'vscode-uri';
import { expect } from 'chai';
import ITextModel = monaco.editor.ITextModel;

const TextModel: {
    TextModel: {
        createFromString(text: string, options?: ITextModelCreationOptions, languageIdentifier?: LanguageIdentifier, uri?: Uri): ITextModel
    }
} = require('esm')(module)('monaco-editor-core/esm/vs/editor/common/model/textModel');

enum DefaultEndOfLine {
    LF = 1,
    CRLF = 2
}

enum LanguageId {
    Null = 0,
    PlainText = 1
}

interface ITextModelCreationOptions {
    tabSize: number;
    insertSpaces: boolean;
    detectIndentation: boolean;
    trimAutoWhitespace: boolean;
    defaultEOL: DefaultEndOfLine;
    isForSimpleWidget: boolean;
    largeFileOptimizations: boolean;
}

interface LanguageIdentifier {
    language: string;
    id: LanguageId;
}

describe('test', () => {

    it('can create a model', () => {
        const model = TextModel.TextModel.createFromString(`const a = 'foo';`);
        expect(model.getValue()).to.be.equal(`const a = 'foo';`);
    });

    it('this is broken', () => {
        const model = TextModel.TextModel.createFromString(`const a = 'foo';`);
        expect(model.getValue()).to.be.equal(`xxx const a = 'foo';`);
    });


});
