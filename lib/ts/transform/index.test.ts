import { camelCaseObject, snakeCaseObject } from "./";

const camelCaseMock = {
  id: "282f5e6d-1575-4c46-a169-810ad483d165",
  data: {
    code: "001",
    businessName: "Inversiones",
    email: "test@test.com",
    imageUrl: "http://someurl.com",
    isVisible: true,
    name: "test test",
    phoneOne: "+123456789",
    phoneTwo: "+0987654321",
    saturdaySchedule: "10am - 2pm",
    storeManager: "Alexis",
    weekSchedule: "12am-1pm",
    createdAt: new Date("2019-05-10T19:13:56.465263+00:00").toISOString()
  },
  address: {
    address: "somewhere on the world",
    city: "atlantis",
    commune: "i dont know",
    country: "sea",
    formattedAddress:
      "somewhere on the world, i dont know, idem, atlantis, sea",
    latitude: 1.0,
    longitude: 2.0,
    region: "idem"
  },
  cutParams: {
    refinedX: 10,
    refinedY: 10,
    minX: 350,
    minY: 100
  },
  optimizationParams: {
    blocking: true,
    wasteSaw: 10,
    wasteTop: 1,
    phases: 2,
    refinedTop: 3,
    cutsType: 4,
    unifyAreas: true
  }
};

const snakeCaseMock = {
  id: "282f5e6d-1575-4c46-a169-810ad483d165",
  data: {
    code: "001",
    business_name: "Inversiones",
    email: "test@test.com",
    image_url: "http://someurl.com",
    is_visible: true,
    name: "test test",
    phone_one: "+123456789",
    phone_two: "+0987654321",
    saturday_schedule: "10am - 2pm",
    store_manager: "Alexis",
    week_schedule: "12am-1pm",
    created_at: new Date("2019-05-10T19:13:56.465263+00:00").toISOString()
  },
  address: {
    address: "somewhere on the world",
    city: "atlantis",
    commune: "i dont know",
    country: "sea",
    formatted_address:
      "somewhere on the world, i dont know, idem, atlantis, sea",
    latitude: 1.0,
    longitude: 2.0,
    region: "idem"
  },
  cut_params: {
    refined_x: 10,
    refined_y: 10,
    min_x: 350,
    min_y: 100
  },
  optimization_params: {
    blocking: true,
    waste_saw: 10,
    waste_top: 1,
    phases: 2,
    refined_top: 3,
    cuts_type: 4,
    unify_areas: true
  }
};

test("camelCase", () => {
  const testData = camelCaseObject(snakeCaseMock);
  expect(Object.keys(testData)[1]).toEqual("data");
  expect(Object.keys(testData.data)[4]).toEqual("isVisible");
  expect(Object.keys(testData)[3]).toEqual("cutParams");
  expect(Object.keys(testData.cutParams)[0]).toEqual("refinedX");
  expect(Object.keys(testData)[4]).toEqual("optimizationParams");
  expect(Object.keys(testData.optimizationParams)[1]).toEqual("wasteSaw");

  expect(Object.values(testData.data)[4]).toEqual(true);
  expect(Object.values(testData.data)[11]).toEqual(
    new Date("2019-05-10T19:13:56.465263+00:00").toISOString()
  );
  expect(Object.values(testData.optimizationParams)[0]).toEqual(true);
});

test("snakeCase", () => {
  const testData = snakeCaseObject(camelCaseMock);
  expect(Object.keys(testData)[1]).toEqual("data");
  expect(Object.keys(testData.data)[4]).toEqual("is_visible");
  expect(Object.keys(testData)[3]).toEqual("cut_params");
  expect(Object.keys(testData.cut_params)[0]).toEqual("refined_x");
  expect(Object.keys(testData)[4]).toEqual("optimization_params");
  expect(Object.keys(testData.optimization_params)[1]).toEqual("waste_saw");

  expect(Object.values(testData.data)[4]).toEqual(true);
  expect(Object.values(testData.data)[11]).toEqual(
    new Date("2019-05-10T19:13:56.465263+00:00").toISOString()
  );
  expect(Object.values(testData.optimization_params)[0]).toEqual(true);
});
