import { IPage } from "./IPage";
import { IBbsArticle } from "./IBbsArticle";

export namespace IPage_lt_IBbsArticle {
    /**
     * List of records.
     * 
     */
    export type ISummary_gt_ = {
        pagination: IPage.IPagination;
        /**
         * List of records.
         * 
         */
        data: Array<IBbsArticle.ISummary>;
    }
}