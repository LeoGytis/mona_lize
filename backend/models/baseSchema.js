const baseSchemaOptions = {
	// timestamps: true,
	toJSON: {
		virtuals: true,
		transform: (doc, ret) => {
			ret.id = ret._id;
			delete ret._id;
			delete ret.__v;
			return ret;
		},
	},
	toObject: {
		virtuals: true,
		transform: (doc, ret) => {
			ret.id = ret._id;
			delete ret._id;
			delete ret.__v;
			return ret;
		},
	},
};

export default baseSchemaOptions;
