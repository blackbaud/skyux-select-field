  /**
   * Extends the `any` type and supports values for data objects that you can inject into
   * the select field component to populate the picker.
   */
  export interface SkySelectField {
  /**
   * Specifies an ID for an item.
   */
  id?: string;
  /**
   * Specifies an ID for an item.
   */
  label?: string;
  /**
   * Specifies a category for an item.
   */
  category?: string;
  /**
   * Specifies a description to display below an item's label when `selectMode`
   * is set to `multiple`.
   */
  [index: string]: any;
}
