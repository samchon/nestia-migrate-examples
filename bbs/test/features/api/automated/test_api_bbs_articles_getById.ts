import typia from "typia";

import api from "./../../../../src/api";
import type { IBbsArticle } from "./../../../../src/api/structures/IBbsArticle";

export const test_api_bbs_articles_getById = async (
    connection: api.IConnection
): Promise<void> => {
    const output: IBbsArticle = 
        await api.functional.bbs.articles.getById(
            connection,
            typia.random<string>(),
            typia.random<string>(),
        );
    typia.assert(output);
};