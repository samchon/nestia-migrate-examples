import typia from "typia";

import api from "./../../../../src/api";
import type { IBbsArticle } from "./../../../../src/api/structures/IBbsArticle";

export const test_api_bbs_articles_putById = async (
    connection: api.IConnection
): Promise<void> => {
    const output: IBbsArticle.ISnapshot = 
        await api.functional.bbs.articles.putById(
            connection,
            typia.random<string>(),
            typia.random<string>(),
            typia.random<IBbsArticle.IUpdate>(),
        );
    typia.assert(output);
};