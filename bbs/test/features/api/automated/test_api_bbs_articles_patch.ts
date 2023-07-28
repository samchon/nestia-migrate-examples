import typia from "typia";

import api from "./../../../../src/api";
import type { IBbsArticle } from "./../../../../src/api/structures/IBbsArticle";
import type { IPage_lt_IBbsArticle } from "./../../../../src/api/structures/IPage_lt_IBbsArticle";

export const test_api_bbs_articles_patch = async (
    connection: api.IConnection
): Promise<void> => {
    const output: IPage_lt_IBbsArticle.ISummary_gt_ = 
        await api.functional.bbs.articles.patch(
            connection,
            typia.random<string>(),
            typia.random<IBbsArticle.IRequest>(),
        );
    typia.assert(output);
};