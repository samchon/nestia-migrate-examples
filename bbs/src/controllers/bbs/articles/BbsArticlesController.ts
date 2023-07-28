import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import typia from "typia";

import { IPage_lt_IBbsArticle } from "../../../api/structures/IPage_lt_IBbsArticle"
import { IBbsArticle } from "../../../api/structures/IBbsArticle"

@Controller("bbs/articles/:section")
export class BbsArticlesController {
    /**
     * List up entire articles, but paginated and summarized.
     * 
     * This method is for listing up summarized articles with pagination.
     * 
     * If you want, you can search and sort articles with specific conditions.
     * 
     * @param section Target section
     * @param input Pagination request info with searching and sorting options
     * @returns Paged articles witb summarization
     */
    @core.TypedRoute.Patch()
    public async patch(
        @core.TypedParam("section") section: string,
        @core.TypedBody() body: IBbsArticle.IRequest,
    ): Promise<IPage_lt_IBbsArticle.ISummary_gt_> {
        section;
        body;
        return typia.random<IPage_lt_IBbsArticle.ISummary_gt_>();
    }

    /**
     * Store a new article.
     * 
     * Store a new article and returns its detailed record info.
     * 
     * @param section Target section
     * @param input New article info
     * @returns Newly created article info
     */
    @core.TypedRoute.Post()
    public async post(
        @core.TypedParam("section") section: string,
        @core.TypedBody() body: IBbsArticle.IStore,
    ): Promise<IBbsArticle> {
        section;
        body;
        return typia.random<IBbsArticle>();
    }

    /**
     * Get an article with detailed info.
     * 
     * Open an article with detailed info, increasing reading count.
     * 
     * @param section Target section
     * @param id Target articles id
     * @returns Detailed article info
     */
    @core.TypedRoute.Get(":id")
    public async getById(
        @core.TypedParam("section") section: string,
        @core.TypedParam("id") id: string,
    ): Promise<IBbsArticle> {
        section;
        id;
        return typia.random<IBbsArticle>();
    }

    /**
     * Update article.
     * 
     * When updating, this BBS system does not overwrite the content, but accumulate it.
     * Therefore, whenever an article being updated, length of {@link IBbsArticle.snapshots}
     * would be increased and accumulated.
     * 
     * @param section Target section
     * @param id Target articles id
     * @param input Content to update
     * @returns Newly created content info
     */
    @core.TypedRoute.Put(":id")
    public async putById(
        @core.TypedParam("section") section: string,
        @core.TypedParam("id") id: string,
        @core.TypedBody() body: IBbsArticle.IUpdate,
    ): Promise<IBbsArticle.ISnapshot> {
        section;
        id;
        body;
        return typia.random<IBbsArticle.ISnapshot>();
    }
}