namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachatEventsSchema

	/// <exclude/>
	public class UsrYachatEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachatEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachatEventsSchema(UsrYachatEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("334f1dfc-93e1-4b34-a9ab-3844fce56bdb");
			Name = "UsrYachatEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("257e4ff2-f4e6-44f7-af46-3540f7f16511");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,93,107,219,64,16,124,15,228,63,44,122,146,192,28,205,107,147,6,98,199,45,129,208,150,74,14,132,210,135,243,105,45,95,185,15,113,119,114,226,150,254,247,238,233,148,88,145,19,200,34,33,233,118,118,118,103,180,134,107,244,45,23,8,21,58,199,189,221,4,182,176,102,35,155,206,241,32,173,57,61,249,123,122,2,20,157,151,166,129,114,239,3,234,243,241,209,184,80,107,107,222,76,58,100,75,19,100,144,232,223,131,97,203,29,154,16,161,9,252,179,79,236,251,211,91,73,99,24,116,121,41,182,168,249,87,82,1,159,32,91,121,119,207,197,150,135,172,248,149,138,218,110,173,164,0,161,184,247,144,114,175,208,192,71,152,115,143,175,100,18,203,96,193,136,208,238,104,104,89,35,236,172,172,225,155,41,249,142,164,228,118,253,27,69,0,143,166,70,55,131,68,56,199,13,233,234,105,175,92,227,1,139,3,221,136,57,198,154,166,96,207,108,79,52,88,156,191,132,37,94,216,247,122,72,120,158,14,138,84,48,1,215,40,164,230,10,90,39,69,116,41,85,177,47,24,170,125,139,245,194,170,78,155,59,174,58,188,24,160,151,121,116,242,123,196,103,211,214,114,3,121,98,186,132,179,15,125,20,47,17,19,73,49,144,221,248,5,55,2,21,214,52,65,112,29,62,255,214,113,248,224,226,66,208,74,122,222,96,133,186,85,60,196,153,13,62,192,173,21,92,201,63,124,173,176,236,113,249,160,100,229,209,209,206,26,114,158,22,150,253,64,111,59,39,8,100,29,177,204,142,219,196,56,236,74,90,179,108,6,217,81,7,207,122,95,110,124,101,237,92,54,233,43,43,88,101,135,9,138,119,200,160,241,211,1,251,108,157,230,33,159,200,163,198,103,64,54,246,247,170,188,62,178,60,70,216,58,251,208,219,176,124,20,216,70,161,79,60,83,248,191,195,231,240,74,15,186,254,3,115,144,211,183,235,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("2c5ef44a-68d0-ebac-09f8-ab92e187ab86"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("257e4ff2-f4e6-44f7-af46-3540f7f16511"),
				CreatedInSchemaUId = new Guid("334f1dfc-93e1-4b34-a9ab-3844fce56bdb"),
				ModifiedInSchemaUId = new Guid("334f1dfc-93e1-4b34-a9ab-3844fce56bdb")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("334f1dfc-93e1-4b34-a9ab-3844fce56bdb"));
		}

		#endregion

	}

	#endregion

}

