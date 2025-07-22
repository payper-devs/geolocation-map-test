import axios from "axios";

export interface TmapPOISearchParams {
  version: string; // API 버전, 예: "1"
  page?: number; // 페이지 번호
  count?: number; // 한 페이지 결과 개수
  categories?: string; // 카테고리 코드, 쉼표(,)로 구분
  centerLon: number; // 중심점 경도 (WGS84 좌표계)
  centerLat: number; // 중심점 위도 (WGS84 좌표계)
  radius?: number; // 반경 (미터 단위)
  reqCoordType?: string; // 요청 좌표계 (예: "WGS84GEO")
  resCoordType?: string; // 응답 좌표계 (예: "WGS84GEO")
  multiPoint?: string; // 여러 좌표 여부 (Y/N), 선택사항
  callback?: string; // JSONP 콜백 함수명, 선택사항
  appKey: string; // 발급받은 앱키
  sort?: string;
}

export const searchPOI = async (params: TmapPOISearchParams) => {
  const url = "https://apis.openapi.sk.com/tmap/pois/search/around";

  return (await axios.get(url, { params })).data;
};
