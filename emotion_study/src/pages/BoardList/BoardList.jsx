/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLoadList, useLoadListByPageNumber } from "../../hooks/boardListHook";

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
`;

const headerTitle = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;

const boardListLayout = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 900px;
    height: 500px;
`;

const boardListHeader = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;
    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 40px;
        font-weight: 700;
        cursor: default;
    }
    & > div:nth-of-type(1) {
        flex-grow: 0;
        border-right: 1px solid #dbdbdb;
        width: 80px;
    }
`;

const boardListItem = css`
    color: #222;
    text-decoration: none;
    cursor: pointer;
    & > li {
        box-sizing: border-box;
        display: flex;
        border-bottom: 1px solid #dbdbdb;
        width: 100%;
        &:hover {
            background-color: #eee;
        }
        & > div {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            height: 40px;
        }
        & > div:nth-of-type(1) {
            flex-grow: 0;
            border-right: 1px solid #dbdbdb;
            width: 80px;
        }
    }
`;

const pageNumberLayout = (page) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    & > a {
        box-sizing: border-box;
        margin: 0px 3px;
        border: 1px solid #dbdbdb;
        padding: 3px;
        text-decoration: none;
        color: #222;
        font-weight: 700;
        &:nth-of-type(${page === 1 ? 1 : page % 5 === 0 ? 8 : (page % 5) + 3}) {
            background-color: #eee;
        }
    }
`;

/**
 * 
(${page === 1 ? 1 : ... }): 페이지가 1인 경우를 확인합니다. 페이지가 1이면 1을 반환합니다.
(page % 5 === 0 ? 8 : ... ): 페이지가 5의 배수인지 확인합니다. 5의 배수라면 8을 반환합니다.
((page % 5) + 3): 위의 두 조건이 모두 해당되지 않는 경우, 페이지 번호를 5로 나눈 나머지에 3을 더하여 반환합니다.
 */

function BoardList() {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const { boardList, pageNumbers, totalPageCount } = useLoadListByPageNumber(page);

    return (
        <div css={layout}>
            <h1 css={headerTitle}>게시글 목록</h1>
            <ul css={boardListLayout}>
                <li css={boardListHeader}>
                    <div>번호</div>
                    <div>제목</div>
                </li>
                {boardList.map(board => 
                    <Link to={`/board/${board.boardId}`} css={boardListItem}>
                        <li>
                            <div>{board.boardId}</div>
                            <div>{board.boardTitle}</div>
                        </li>
                    </Link>
                )}
            </ul>
            <div css={pageNumberLayout(page)}>

                {/* 이전 페이지로 이동하는 링크 표시 */}

                {page !== 1 && <Link to={`/board/list?page=`}>처음으로</Link>}
                {page !== 1 && <Link to={`/board/list?page=${startPageNumber !== 1}`}>&#171;</Link>}
                {page !== 1 && <Link to={`/board/list?page=${page - 1}`}>&#60;</Link>}

                {/* 각 페이지 번호에 해당하는 링크 표시 */}
                {pageNumbers.map(pageNumber => 
                    <Link to={`/board/list?page=${pageNumber}`}>{pageNumber}</Link>    
                )}

                {/* 다음 페이지로 이동하는 링크 표시 */}
                {page !== totalPageCount && <Link to={`/board/list?page=${page + 1}`}>&#62;</Link>}
                {page !== totalPageCount && <Link to={`/board/list?page=${page + 1}`}>&#187;</Link>}
                {page !== totalPageCount && <Link to={`/board/list?page=${page + 1}`}>마지막으로</Link>}
            </div>
        </div>
    );
}

export default BoardList;