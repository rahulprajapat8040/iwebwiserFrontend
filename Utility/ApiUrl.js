// export const ServerUrl = 'https://b5123341-8001.inc1.devtunnels.ms/'
// export const ServerUrl = 'http://213.210.21.175:8001/api/v1'
export const ServerUrl = "http://localhost:5005/api/v1";
export const ApiUrl = {
  nav_bar: `${ServerUrl}/nav/getNavBar`,
  getBanner: `${ServerUrl}/banner/getAllBanner`,
  // getAllService: 'service/getAllService',
  getAllService: `${ServerUrl}/service/getAllService?showAll=true`,
  getAllSubService: `${ServerUrl}/subService/getAllSubService?showAll=true`,
  getAllCaseStudy: `${ServerUrl}/caseStudy/getAllCaseStudy?showAll=true`,
  getCaseStudyBySlug: `${ServerUrl}/caseStudy/getCaseStudyBySlug`,
  getCaseIndusty: `${ServerUrl}/caseStudy/getCaseIndusty`,
  getAllIndustry: `${ServerUrl}/industry/getAllIndustry?showAll=true`,
  getIndustryDetailBySlug: `${ServerUrl}/industryPage/getIndustryPageBySlug`,
  getAllCertificate: `${ServerUrl}/certificate/getAllCertificate?showAll=true`,
  getAllOurClient: `${ServerUrl}/ourClient/getAllOurClient?showAll=true`,
  getAlltechnology: `${ServerUrl}/technology/getAlltechnology?showAll=true`,
  getAllBlog: `${ServerUrl}/blog/getAllBlog?showAll=true`,
  getAllFeedback: `${ServerUrl}/feedback/getAllFeedback?showAll=true`,
  getActivesocialMedia: `${ServerUrl}/socialMedia/getActiveSocialMedia`,
  getAllHeader: `${ServerUrl}/header/getAllHeader`,
  getBranchByPageId: `${ServerUrl}/branch/getBranchByPageId`,
  getAllServiceFaq: `${ServerUrl}/serviceFaq/getAllServiceFaq?showAll=true`,
  getServiceDetailBySlug: `${ServerUrl}/serviceDetail/getServicedetailBySlug`,
  getField: `${ServerUrl}/field/getAllField`,
  getFieldBySlug: `${ServerUrl}/field/getFieldBySlug`,
  getAllSteps: `${ServerUrl}/steps/getAllSteps`,
};
