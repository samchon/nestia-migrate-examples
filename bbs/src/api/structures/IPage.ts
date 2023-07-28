export namespace IPage {
    export namespace Sort_lt_IBbsArticle {
        export namespace IRequest {
            export type SortableColumns_gt_ = Array<"-writer" | "-title" | "-created_at" | "-updated_at" | "+writer" | "+title" | "+created_at" | "+updated_at">
        }
    }
    /**
     * Number of total pages.
     * 
     * Equal to {@link records} / {@link limit} with ceiling.
     * 
     */
    export type IPagination = {
        /**
         * Current page number.
         * 
         */
        current: number;
        /**
         * Limitation of records per a page.
         * 
         * @default 100
         */
        limit: number;
        /**
         * Count of total records in database.
         * 
         */
        records: number;
        /**
         * Number of total pages.
         * 
         * Equal to {@link records} / {@link limit} with ceiling.
         * 
         */
        pages: number;
    }
}