import { IPage } from "./IPage";
import { IAttachmentFile } from "./IAttachmentFile";

/**
 * Creation time of the article.
 * 
 * @format date-time
 */
export type IBbsArticle = {
    /**
     * Primary Key.
     * 
     * @format uuid
     */
    id: string;
    /**
     * Section code.
     * 
     */
    section: string;
    /**
     * Name of nickname of writer.
     * 
     */
    writer: string;
    /**
     * List of snapshot contents.
     * 
     * Whenever updating an article, its contents would be accumulated.
     * 
     */
    snapshots: Array<IBbsArticle.ISnapshot>;
    /**
     * Creation time of the article.
     * 
     * @format date-time
     */
    created_at: string;
}
export namespace IBbsArticle {
    /**
     * Sorting options.
     * 
     * The plus sign means ASC and minus sign means DESC.
     * 
     */
    export type IRequest = {
        search?: IBbsArticle.IRequest.ISearch;
        sort?: IPage.Sort_lt_IBbsArticle.IRequest.SortableColumns_gt_;
        /**
         * Page number.
         * 
         */
        page?: number;
        /**
         * Limitation of records per a page.
         * 
         */
        limit?: number;
    }
    export namespace IRequest {
        /**
         * Searching options.
         * 
         */
        export type ISearch = {
            writer?: string;
            title?: string;
            body?: string;
        }
    }
    /**
     * Summarized info.
     * 
     */
    export type ISummary = {
        id: string;
        writer: string;
        title: string;
        created_at: string;
        updated_at: string;
    }
    /**
     * Creation time of this content.
     * 
     */
    export type ISnapshot = {
        /**
         * Primary key of individual content.
         * 
         * @format uuid
         */
        id: string;
        /**
         * Creation time of this content.
         * 
         */
        created_at: string;
        /**
         * Title of the article.
         * 
         */
        title: string;
        /**
         * Content body.
         * 
         */
        body: string;
        /**
         * Format of the content body.
         * 
         */
        format: "md" | "html" | "txt";
        /**
         * List of files (to be) attached.
         * 
         */
        files: Array<IAttachmentFile>;
    }
    /**
     * Name or nickname of the writer.
     * 
     */
    export type IStore = {
        /**
         * Name or nickname of the writer.
         * 
         */
        writer: string;
        /**
         * Title of the article.
         * 
         */
        title: string;
        /**
         * Content body.
         * 
         */
        body: string;
        /**
         * Format of the content body.
         * 
         */
        format: "md" | "html" | "txt";
        /**
         * List of files (to be) attached.
         * 
         */
        files: Array<IAttachmentFile>;
        /**
         * Password of the article.
         * 
         */
        password: string;
    }
    /**
     * Password of the article.
     * 
     */
    export type IUpdate = {
        /**
         * Title of the article.
         * 
         */
        title: string;
        /**
         * Content body.
         * 
         */
        body: string;
        /**
         * Format of the content body.
         * 
         */
        format: "md" | "html" | "txt";
        /**
         * List of files (to be) attached.
         * 
         */
        files: Array<IAttachmentFile>;
        /**
         * Password of the article.
         * 
         */
        password: string;
    }
}