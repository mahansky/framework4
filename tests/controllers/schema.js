exports.install = function() {

	// Schema - Methods
	ROUTE('GET       /schema/methods/query/                      *Schema/Methods       --> query');
	ROUTE('GET       /schema/methods/read/                       *Schema/Methods       --> read');
	ROUTE('GET       /schema/methods/insert/                     *Schema/Methods       --> insert');
	ROUTE('GET       /schema/methods/update/                     *Schema/Methods       --> update');
	ROUTE('GET       /schema/methods/patch/                      *Schema/Methods       --> patch');
	ROUTE('GET       /schema/methods/remove/                     *Schema/Methods       --> remove');
	ROUTE('GET       /schema/methods/workflow/                   *Schema/Methods       --> workflow');

	// Schema - Validation
	ROUTE('POST      /schema/formatting/                         *Schema/Formatting    --> exec');
	ROUTE('POST      /schema/required/                           *Schema/Required      --> exec');
	ROUTE('POST      /schema/notrequired/                        *Schema/Notrequired   --> exec');

	// Schema - Chaining
	ROUTE('POST      /schema/chaining/one/                       *Schema/Chaining      --> one (response) two');
	ROUTE('POST      /schema/chaining/two/                       *Schema/Chaining      --> one two (response)');

	// Schema - Extension
	ROUTE('GET      /schema/extensions/query/                    *Schema/Extensions    --> query');
	ROUTE('GET      /schema/extensions/read/                     *Schema/Extensions    --> read');
	ROUTE('GET      /schema/extensions/insert/                   *Schema/Extensions    --> insert');
	ROUTE('GET      /schema/extensions/patch/                    *Schema/Extensions    --> patch');
	ROUTE('GET      /schema/extensions/update/                   *Schema/Extensions    --> update');
	ROUTE('GET      /schema/extensions/remove/                   *Schema/Extensions    --> remove');
	ROUTE('GET      /schema/extensions/workflow/                 *Schema/Extensions    --> workflow');

	// Schema - Filters
	ROUTE('POST     /schema/filters/                             *Schema/Filters       --> exec');

	// Schema - Verify
	ROUTE('POST     /schema/verify/                              *Schema/Verify        --> exec');

	// Schema - Middleware
	ROUTE('GET      /schema/middleware/valid/                    *Schema/Middleware    --> one');
	ROUTE('GET      /schema/middleware/invalid/                  *Schema/Middleware    --> two');

}