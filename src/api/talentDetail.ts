import { AxiosError, AxiosResponse } from "axios";
import type { INotibase } from "@/types/notification";
import type { ITalentDetail } from "@/types/talentDetail";
import { client } from "./axios";

// 인재 상세 정보 조회
export const getDetailInfo = async (applyId: string) => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/apply/${applyId}`,
    });
    return data.data as ITalentDetail;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
  }
};

// 인재 코멘트 등록
export const addComment = async (applyId: string, evaluation: string) => {
  const { data } = await client({
    method: "PUT",
    url: `/apply/note/${applyId}`,
    data: evaluation,
  });
  return data;
};

// 탈락 인재 보관함으로 이동
export const assortFailTalent = async (applyId: string) => {
  const { data } = await client({
    method: "PUT",
    url: `apply/drop/${applyId}`,
  });
  return data;
};

// 인재 찜하기
export const assortLikeTalent = async (applyId: string) => {
  const { data } = await client({
    method: "PUT",
    url: `apply/wish/${applyId}`,
  });
  return data;
};

// 서류 검토 처리
export const checkApplication = async (applyId: string) => {
  const { data } = await client({
    method: "PUT",
    url: `apply/check/${applyId}`,
  });
  return data;
};

// 면접 날짜 지정
export const setMeeting = async (
  applyId: string,
  interviewDate: string,
  interviewTime: string,
) => {
  const { data } = await client({
    method: "PUT",
    url: `apply/set_meeting/${applyId}`,
    data: { interviewDate, interviewTime },
  });
  return data;
};
