var bayrell_rtl = require('bayrell_rtl');
var rtl = bayrell_rtl.rtl;


base_path = '';
if (typeof __dirname != 'undefined') base_path = rtl.clone(__dirname);
else if (typeof global.__dirname != 'undefined') base_path = rtl.clone(global.__dirname);


module.exports = {
	'type': 1,
	'base_path': base_path,
	'files': [
		'Exceptions/EndOfStringExpected',
		'Exceptions/HexNumberExpected',
		'Exceptions/TwiceDeclareElseError',
		'LangBay/ParserBay',
		'LangBay/ParserBayFactory',
		'LangBay/ParserBayNameToken',
		'LangBay/ParserBayToken',
		'LangES6/TranslatorES6',
		'LangES6/TranslatorES6Factory',
		'LangNodeJS/TranslatorNodeJS',
		'LangNodeJS/TranslatorNodeJSFactory',
		'LangPHP/TranslatorPHP',
		'LangPHP/TranslatorPHPFactory',
		'OpCodes/BaseOpCode',
		'OpCodes/OpAdd',
		'OpCodes/OpAnd',
		'OpCodes/OpArray',
		'OpCodes/OpAssign',
		'OpCodes/OpAssignDeclare',
		'OpCodes/OpBitAnd',
		'OpCodes/OpBitNot',
		'OpCodes/OpBitOr',
		'OpCodes/OpBitXor',
		'OpCodes/OpBreak',
		'OpCodes/OpCall',
		'OpCodes/OpCallAwait',
		'OpCodes/OpChilds',
		'OpCodes/OpClassDeclare',
		'OpCodes/OpClone',
		'OpCodes/OpComment',
		'OpCodes/OpCompare',
		'OpCodes/OpConcat',
		'OpCodes/OpContinue',
		'OpCodes/OpDelete',
		'OpCodes/OpDiv',
		'OpCodes/OpDynamic',
		'OpCodes/OpFlags',
		'OpCodes/OpFor',
		'OpCodes/OpFunctionArrowDeclare',
		'OpCodes/OpFunctionDeclare',
		'OpCodes/OpHexNumber',
		'OpCodes/OpIdentifier',
		'OpCodes/OpIf',
		'OpCodes/OpIfElse',
		'OpCodes/OpInterfaceDeclare',
		'OpCodes/OpMap',
		'OpCodes/OpMethod',
		'OpCodes/OpMod',
		'OpCodes/OpMult',
		'OpCodes/OpNamespace',
		'OpCodes/OpNew',
		'OpCodes/OpNope',
		'OpCodes/OpNot',
		'OpCodes/OpNumber',
		'OpCodes/OpOr',
		'OpCodes/OpPostDec',
		'OpCodes/OpPostInc',
		'OpCodes/OpPow',
		'OpCodes/OpPreDec',
		'OpCodes/OpPreInc',
		'OpCodes/OpPreprocessorCase',
		'OpCodes/OpPreprocessorSwitch',
		'OpCodes/OpReturn',
		'OpCodes/OpShiftLeft',
		'OpCodes/OpShiftRight',
		'OpCodes/OpStatic',
		'OpCodes/OpString',
		'OpCodes/OpSub',
		'OpCodes/OpTemplateIdentifier',
		'OpCodes/OpTernary',
		'OpCodes/OpThrow',
		'OpCodes/OpTryCatch',
		'OpCodes/OpTryCatchChilds',
		'OpCodes/OpUse',
		'OpCodes/OpWhile',
		'OpCodes/OpValue1',
		'OpCodes/OpValue2',
		'OpCodes/OpValueString',
		'OpCodes/OpVector',
		'CommonParser',
		'CommonTranslator',
		'LangConstant',
		'ModuleDescription',
		'Utils',
	],
};

