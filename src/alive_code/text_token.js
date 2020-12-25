class TextToken
{
	constructor(value, colorId, preColorId, italic)
	{
		this.value = value;
		this.colorId = colorId;
		this.preColorId = preColorId;
		this.italic = italic ? italic : false;
	}
};

export default TextToken;