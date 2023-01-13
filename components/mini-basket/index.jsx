import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const products = [
  {
    "pk": 3501,
    "name": "Ingenio Cam Kapak 22 cm",
    "sku": "2100127839",
    "base_code": "36AB",
    "attributes": {
      "integration_en": "0",
      "integration_is_seo_automatic": "true",
      "erp_boy": "0",
      "erp_grup2kodu": "Q",
      "erp_pallet_weight": "0",
      "integration_barkod": "3168430345751",
      "erp_pallet_dimension_height": "0",
      "integration_pallet_weight": "0",
      "erp_packed_dimension_depth": "0",
      "erp_aile_kodu": "S03",
      "erp_products_perparcel": "0",
      "integration_gecerliflg": "true",
      "erp_defoluflg": "false",
      "erp_serisonuflg": "false",
      "integration_products_percontainer_c20": "0",
      "erp_pallet_volume": "0",
      "integration_yukselik": "0",
      "erp_pallet_dimension_width": "0",
      "integration_aile_kodu": "S03",
      "integration_products_perplayer": "0",
      "erp_layers_perpallet": "0",
      "erp_products_percontainer_hq4": "0",
      "integration_layers_perpallet": "0",
      "integration_attributeId_105": "Cam",
      "erp_yukselik": "0",
      "erp_range": "36AB",
      "erp_products_percontainer_c40": "0",
      "integration_gecerli": "true",
      "integration_spare_parts_avaibility": "False",
      "integration_parcel_volume": "0",
      "erp_products_perplayer": "0",
      "integration_serisonuflg": "false",
      "integration_products_perparcel": "0",
      "erp_en": "0",
      "integration_grup2kodu": "Q",
      "erp_is_seo_automatic": "true",
      "integration_alt_aile_kodu": "S03236",
      "integration_sirketkodu": "2006_GSEB",
      "erp_agirlik": "470",
      "integration_products_percontainer_c40": "0",
      "erp_barkod": "3168430345751",
      "erp_spare_parts_avaibility": "False",
      "integration_parcel_dimension_depth": "0",
      "integration_defoluflg": "false",
      "integration_agirlik": "470 gr",
      "erp_gecerliflg": "true",
      "erp_gecerli": "true",
      "erp_sirketkodu": "2006_GSEB",
      "erp_parcel_dimension_width": "0",
      "integration_pallet_dimension_width": "0",
      "erp_alt_aile_kodu": "S03236",
      "integration_parcel_dimension_height": "0",
      "integration_boy": "0",
      "short_description": "•\tIngenio serisi ile uyumludur <br> •\t22 cm",
      "erp_parcel_dimension_height": "0",
      "integration_marka": "01",
      "integration_pallet_dimension_height": "0",
      "erp_parcel_weight": "0",
      "integration_products_percontainer_hq4": "0",
      "integration_parcel_weight": "0",
      "erp_products_percontainer_c20": "0",
      "integration_range": "36AB",
      "erp_marka": "01",
      "erp_parcel_dimension_depth": "0",
      "erp_pallet_dimension_depth": "0",
      "erp_parcel_volume": "0",
      "integration_parcel_dimension_width": "0",
      "integration_pallet_dimension_depth": "0",
      "integration_pallet_volume": "0",
      "integration_packed_dimension_depth": "0"
    },
    "attribute_set": 1,
    "attributes_kwargs": {
      "integration_marka": {
        "value": "01",
        "data_type": "dropdown",
        "label": "TEFAL"
      },
      "integration_gecerli": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "integration_is_seo_automatic": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "erp_marka": {
        "value": "01",
        "data_type": "dropdown",
        "label": "TEFAL"
      },
      "integration_serisonuflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "integration_defoluflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_serisonuflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_is_seo_automatic": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "integration_attributeId_105": {
        "value": "Cam",
        "data_type": "dropdown",
        "label": "Cam"
      },
      "erp_gecerli": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      }
    },
    "extra_attributes": {
      "top_seller": false
    },
    "productimage_set": [
      {
        "pk": 10623,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2022/11/29/11262/2b3641da-a35b-4879-b7eb-b5d32450f56e.jpg",
        "order": 1,
        "created_date": "2022-11-29T15:56:34.371101Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 10625,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2022/11/29/11262/a9bc73c6-51e0-4e8d-8c7f-ff1aaf37861b.jpg",
        "order": 2,
        "created_date": "2022-11-29T15:56:34.503311Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 10624,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2022/11/29/11262/33cc174a-4714-4135-b78c-cc4a1843df0f.jpg",
        "order": 3,
        "created_date": "2022-11-29T15:56:34.449441Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 10626,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2022/11/29/11262/f487b1f5-32d9-4598-8de7-5dbab90aad8c.jpg",
        "order": 4,
        "created_date": "2022-11-29T15:56:34.545847Z",
        "specialimage_set": [

        ]
      }
    ],
    "price": "349.90",
    "in_stock": true,
    "currency_type": "try",
    "retail_price": "349.90",
    "unit_type": "qty",
    "absolute_url": "ingenio-cam-kapak-22-cm-2100127839",
    "productvideo_set": [

    ],
    "product_type": "0",
    "price_type": "default",
    "form_schema": null,
    "is_ready_to_basket": true,
    "stock": 2,
    "data_source": null,
    "basket_offers": [

    ],
    "extra_data": {
      "variants": [

      ]
    }
  },
  {
    "pk": 1142,
    "name": "Köpüklüm Pro Çelik Türk Kahvesi Makinesi - Beyaz",
    "sku": "9100041398",
    "base_code": "CM830",
    "attributes": {
      "integration_is_seo_automatic": "true",
      "teslimat_sureleri": "2",
      "integration_attributeId_22": "Beyaz",
      "erp_grup2kodu": "N",
      "erp_pallet_weight": "0",
      "integration_barkod": "8697975601008",
      "erp_pallet_dimension_height": "0",
      "integration_pallet_weight": "0",
      "erp_packed_dimension_depth": "0",
      "erp_aile_kodu": "B01",
      "erp_products_perparcel": "0",
      "integration_gecerliflg": "true",
      "erp_defoluflg": "false",
      "erp_serisonuflg": "false",
      "purchase_limit_per_basket": "5",
      "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C5F50C61-9BEC-44AE-8D2999A491B3BEF8/?w=147&h=147&crop=false__Işıklı ve Sesli Sensör Sistemi",
      "integration_yukselik": "24,8",
      "erp_pallet_dimension_width": "0",
      "integration_aile_kodu": "B01",
      "integration_products_perplayer": "0",
      "erp_layers_perpallet": "0",
      "erp_products_percontainer_hq4": "0",
      "agirlik": "1,4 kg",
      "ozellik2_aciklama": "Işıklı ve sesli uyarı sistemi sayesinde kahveniz hazır olduğunda otomatik uyarı alırsınız.",
      "integration_layers_perpallet": "0",
      "integration_model": "Köpüklüm",
      "erp_barkod": "8697975601008",
      "erp_range": "CM830",
      "product_line": "BEVERAGE",
      "erp_products_percontainer_c40": "0",
      "integration_gecerli": "true",
      "min_stok": "10",
      "integration_parcel_volume": "0",
      "erp_products_perplayer": "0",
      "integration_serisonuflg": "false",
      "integration_editorial_description_title": "Köpüklüm ile her fincanda bol köpüklü kahve deneyimi",
      "integration_products_percontainer_c20": "0",
      "erp_is_seo_automatic": "true",
      "genislik": "21,6",
      "integration_alt_aile_kodu": "B01027",
      "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/B6D07B98-1129-4DE9-A4FC58201A7A10C6/?w=147&h=147&crop=false__Akıllı Sensör Sistemi",
      "integration_sirketkodu": "2006_GSEB",
      "erp_agirlik": "1400",
      "integration_products_percontainer_c40": "0",
      "integration_parcel_dimension_depth": "0",
      "integration_defoluflg": "false",
      "erp_pallet_volume": "0",
      "integration_agirlik": "1400",
      "erp_gecerliflg": "true",
      "erp_gecerli": "true",
      "erp_sirketkodu": "2006_GSEB",
      "erp_parcel_dimension_width": "0",
      "integration_pallet_dimension_width": "0",
      "ozellik1_aciklama": "Akıllı Sensör Sistemi sayesinde kahveniz tam kıvamına geldiğinde taşma olmadan otomatik olarak pişirme tamamlanır.",
      "erp_alt_aile_kodu": "B01027",
      "integration_parcel_dimension_height": "0",
      "short_description": "• Paslanmaz çelik<br>\n• 4 fincan kapasite<br>\n• Çift taraflı ağız<br>\n• Akıllı sensör sistemi<br>",
      "erp_parcel_dimension_height": "0",
      "integration_marka": "01",
      "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/6A8C0201-39B4-41BD-A8E03CBB5A8E0930/?w=147&h=147&crop=false__Hijyenik Çelik Cezve",
      "ozellik3_aciklama": "Paslanmaz çelik malzemesi sayesinde cezve temizliği artık çok daha kolay.",
      "integration_pallet_dimension_height": "0",
      "erp_parcel_weight": "0",
      "integration_products_perparcel": "0",
      "integration_products_percontainer_hq4": "0",
      "integration_parcel_weight": "0",
      "integration_editorial_description_detail": "Kahvenizi damak tadınıza uygun şekilde pişirmenize olanak sağlayan Köpüklüm Türk Kahvesi Makinesi, paslanmaz çelik cezvesi sayesinde kolayca temizlenir ve hijyeniktir. Aynı anda 4 fincan kapasitede kahve yapmanıza olanak sağlayan Köpüklüm Türk Kahvesi Makinesi, taşmayı önleyen akıllı sensör sistemi sayesinde güvenli kullanım sunarken; sesli ve ışıklı uyarı sistemi sayesinde kahveniz hazır olduğunda sizi uyarır. Çift taraflı cezve ağzı ile köpüğü ve kahveyi kolaylıkla pay etmenizi sağlayan Köpüklüm Türk Kahvesi Makinesi, her fincanda bol köpüklü bir kahve deneyimi sunuyor.",
      "erp_products_percontainer_c20": "0",
      "iade_kategori": "yurtici",
      "integration_range": "CM830",
      "integration_grup2kodu": "N",
      "erp_marka": "01",
      "erp_parcel_dimension_depth": "0",
      "erp_pallet_dimension_depth": "0",
      "derinlik": "30,5",
      "erp_parcel_volume": "0",
      "integration_parcel_dimension_width": "0",
      "integration_pallet_dimension_depth": "0",
      "integration_pallet_volume": "0",
      "integration_packed_dimension_depth": "0"
    },
    "attribute_set": 6,
    "attributes_kwargs": {
      "integration_marka": {
        "value": "01",
        "data_type": "dropdown",
        "label": "TEFAL"
      },
      "integration_is_seo_automatic": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "integration_gecerli": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "product_line": {
        "value": "BEVERAGE",
        "data_type": "dropdown",
        "label": "BEVERAGE"
      },
      "integration_attributeId_22": {
        "value": "Beyaz",
        "data_type": "dropdown",
        "label": "Beyaz"
      },
      "integration_serisonuflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "integration_defoluflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_marka": {
        "value": "01",
        "data_type": "dropdown",
        "label": "TEFAL"
      },
      "erp_defoluflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_is_seo_automatic": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "erp_serisonuflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_gecerli": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      }
    },
    "extra_attributes": {
      "top_seller": true
    },
    "productimage_set": [
      {
        "pk": 2764,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2020/11/02/2197/83fb27b4-cfd7-49ae-ae40-44ab77910418.jpg",
        "order": 1,
        "created_date": "2020-11-02T20:24:40.931495Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 2767,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2020/11/02/2197/07eea243-ad8e-49b5-8c3c-ff3bc9e40160.jpg",
        "order": 2,
        "created_date": "2020-11-02T20:24:41.146399Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 2768,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2020/11/02/2197/7010060c-5f07-4b52-8ec0-4c4a20737072.jpg",
        "order": 3,
        "created_date": "2020-11-02T20:24:41.183348Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 2770,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2020/11/02/2197/dd3dd767-18ca-4ec9-a948-9323c876bd07.jpg",
        "order": 4,
        "created_date": "2020-11-02T20:24:41.306117Z",
        "specialimage_set": [

        ]
      }
    ],
    "price": "2299.90",
    "in_stock": false,
    "currency_type": "try",
    "retail_price": "2299.90",
    "unit_type": "qty",
    "absolute_url": "/kopuklum-pro-celik-turk-kahvesi-makinesi-beyaz-9100041398/",
    "productvideo_set": [

    ],
    "product_type": "0",
    "price_type": "default",
    "form_schema": null,
    "is_ready_to_basket": false,
    "stock": 0,
    "data_source": null,
    "basket_offers": [

    ],
    "extra_data": {
      "variants": [

      ]
    }
  },
  {
    "pk": 2081,
    "name": "Display Digital Su Isıtıcısı - 1.7 L",
    "sku": "7211003827",
    "base_code": "KO851",
    "attributes": {
      "erp_alt_aile_kodu": "B03055",
      "integration_pallet_weight": "0",
      "integration_editorial_description_title": "Tefal Display Su Isıtıcısı: Modern, sıcaklık ayarı yapabileceğiniz su ısıtıcısı",
      "ozellik4_aciklama": "100°C ayarına tek bir dokunuşla suyu anında kaynatın. Yemek pişirirken kullanmak için mükemmeldir.",
      "ozellik5_aciklama": "30 dakikalık sıcak tutma fonksiyonu, istediğiniz zaman sıcak içecekler için suyu mükemmel sıcaklıkta tutar.",
      "integration_attributeId_22": "Siyah",
      "erp_grup2kodu": "N",
      "erp_pallet_weight": "0",
      "integration_barkod": "3045386381937",
      "erp_pallet_dimension_height": "0",
      "integration_is_seo_automatic": "true",
      "erp_packed_dimension_depth": "0",
      "erp_aile_kodu": "B03",
      "erp_products_perparcel": "0",
      "integration_attributeId_8": "1,7lt",
      "integration_gecerliflg": "true",
      "erp_defoluflg": "false",
      "erp_serisonuflg": "false",
      "integration_products_percontainer_c20": "0",
      "ozellik8_aciklama": "Otomatik kapak açma, tek bir düğmeye dokunarak kolay doldurma ve rahat temizlik için geniş bir açıklık sağlar.",
      "gg_new_catalog_id": "884698",
      "erp_pallet_volume": "0",
      "integration_yukselik": "20,4",
      "erp_pallet_dimension_width": "0",
      "integration_aile_kodu": "B03",
      "integration_products_perplayer": "0",
      "erp_layers_perpallet": "0",
      "erp_products_percontainer_hq4": "0",
      "ozellik8_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/A938D222-AA3D-4D6E-A736609904113595/?w=147&h=147&crop=false__Otomatik kapak açma",
      "ozellik2_aciklama": "Zevklerinize ve ihtiyaçlarınıza mükemmel bir şekilde uyarlanmış beş hassas ayara sahip elektronik sıcaklık seçimi sayesinde sıcak içeceklerinizi tam istediğiniz gibi hazırlayın: 40°C / 70°C / 80°C / 90°C / 100°C.",
      "ozellik9_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/1A69DD10-39D0-41B0-8031C3FE57362A83/?w=147&h=147&crop=false__Çift cidarlı yapı ısıyı içeride tutar",
      "integration_layers_perpallet": "0",
      "integration_model": "Loft 1.7 L Siyah",
      "erp_barkod": "3045386381937",
      "erp_range": "KO851",
      "product_line": "BEVERAGE",
      "agirlik": "1,4 kg",
      "ozellik5_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C8C53B36-91F7-4723-BE641815D95A6B2B/?w=147&h=147&crop=false__30 dakika sıcak tutma fonksiyonu",
      "integration_gecerli": "true",
      "min_stok": "10",
      "erp_parcel_dimension_depth": "0",
      "integration_parcel_volume": "0",
      "erp_products_perplayer": "0",
      "downloadable_image_title": "https://tefal.akinoncdn.com/cms/2021/11/09/d95d3b6f-3e5f-424a-a23f-5c9feb5859a3.pdf",
      "integration_serisonuflg": "false",
      "integration_products_perparcel": "0",
      "integration_grup2kodu": "N",
      "erp_is_seo_automatic": "true",
      "genislik": "18,4",
      "integration_alt_aile_kodu": "B03055",
      "ozellik1_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/5113ED20-A2D8-4CFB-9254A3D59CFA3F22/?w=147&h=147&crop=false__Dijital ekran",
      "integration_sirketkodu": "2006_GSEB",
      "erp_agirlik": "1400",
      "ozellik6_aciklama": "Kusursuz paslanmaz çelik iç kısım, kolay temizlik için ulaşılması zor köşeleri ve engelleri ortadan kaldırır.",
      "integration_products_percontainer_c40": "0",
      "integration_parcel_dimension_depth": "0",
      "erp_products_percontainer_c40": "0",
      "integration_defoluflg": "false",
      "ozellik2_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/2567E47C-9912-40B5-BC43F7CF90B2B67D/?w=147&h=147&crop=false__5 farklı sıcaklık ayarı",
      "erp_parcel_volume": "0",
      "erp_gecerliflg": "true",
      "erp_gecerli": "true",
      "erp_sirketkodu": "2006_GSEB",
      "erp_parcel_dimension_width": "0",
      "integration_editorial_description_detail": "Modern Tefal elektrikli su ısıtıcısı ile her zevke mükemmel bir şekilde uyarlanmış doğru sıcaklıkta sıcak içeceklerin tadını çıkarın. Suyun gerçek sıcaklığını gösteren muntazam, minimalist dijital ekrana sahip su ısıtıcısı, 40°C ile 100°C arasında beş sıcaklık ayarı sunar - tek dokunuşla suyu ısıtmak için mükemmeldir. Çift cidarlı yapısı, tam güvenlik için dışarıda dokunulabilecek kadar soğuk bir yüzey sağlarken ısıyı içeride tutar. Kullanışlı özellikleri arasında içeceklerinizi hazır olduğunuzda hazırlayabilmeniz için 30 dakikalık sıcak tutma işlevi, kolay doldurma için otomatik kapak açma, 360° dönebilen taban ve sorunsuz kullanım için otomatik kapanma bulunur. Ayrıca 1,7 L'lik kapasitesi sayesinde, bir seferde 7 bardağa kadar kullanım ve kolay temizlik için çıkarılabilir bir kireç filtresi sunar. Tefal - elektrikli su ısıtıcısına modern yanıt.",
      "ozellik7_aciklama": "360° dönebilen tabanı sayesinde, kablosuz su ısıtıcısı sağlam bir şekilde yerinde kalır ve her açıdan kolayca kaldırılıp yerleştirilebilir.",
      "ozellik1_aciklama": "İçerideki suyun gerçek sıcaklığını gösteren minimalist, okunması kolay dijital ekrana sahiptir. Modern ve sofistike bir tasarım için su ısıtıcısının gövdesine kusursuz bir şekilde entegre edilmiştir.",
      "ozellik4_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/3687184E-0C55-488E-AA1F9C4105808E46/?w=147&h=147&crop=false__Tek dokunuşla kaynatma",
      "integration_parcel_dimension_height": "0",
      "purchase_limit_per_basket": "5",
      "short_description": "•\tDijital ekran <br>\n•\t5 sıcaklık seçimi <br>\n•\tÇıkarılabilir filtre  <br>\n•\t30 dakika sıcak tutma <br>\n•\tPaslanmaz çelik iç kısım  <br>\n•\tÇıkarılabilir kireç filtresi <br>\n•\tOtomatik kapanma <br>",
      "erp_parcel_dimension_height": "0",
      "integration_marka": "01",
      "ozellik3_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/6317EEC8-C910-4FB1-BBCBA8DDDE5B497B/?w=147&h=147&crop=false__Ellerinizi korumak için güvenli dokunuş sağlayan yüzey",
      "ozellik3_aciklama": "Güvenli dokunuşlu ısı engelleme yüzeyi, rahat, endişesiz kullanım ve daha fazla güvenlik için su ısıtıcısının dışını serin tutar.",
      "integration_pallet_dimension_height": "0",
      "erp_parcel_weight": "0",
      "ozellik7_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/E4E50252-A3B3-43B2-83D3B0F655FDE89D/?w=147&h=147&crop=false__Tam kullanım kolaylığı için 360° dönebilen taban",
      "downloadable_link": "https://tefal.akinoncdn.com/cms/2021/04/26/925fa363-a26d-4686-8dd7-07454e111ec6.jpe__Kullanım Kılavuzu",
      "integration_products_percontainer_hq4": "0",
      "integration_parcel_weight": "0",
      "integration_pallet_dimension_width": "0",
      "erp_products_percontainer_c20": "0",
      "iade_kategori": "yurtici",
      "integration_range": "KO851",
      "erp_marka": "01",
      "ozellik6_baslik": "https://d32iut21qthkdz.cloudfront.net/images/media/C3EC539A-15BA-4887-B158B61E1D02EC81/?w=147&h=147&crop=false__Kolay temizlik için kusursuz paslanmaz çelik iç kısım",
      "erp_pallet_dimension_depth": "0",
      "derinlik": "29",
      "ozellik9_aciklama": "Çift cidarlı yapı, içinde kaynar su olsa bile dış katmanın soğuk kalmasını sağlarken ısıyı içeride tutar.",
      "integration_agirlik": "1,4 kg",
      "integration_parcel_dimension_width": "0",
      "integration_pallet_dimension_depth": "0",
      "integration_pallet_volume": "0",
      "integration_packed_dimension_depth": "0"
    },
    "attribute_set": 4,
    "attributes_kwargs": {
      "integration_marka": {
        "value": "01",
        "data_type": "dropdown",
        "label": "TEFAL"
      },
      "integration_is_seo_automatic": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "integration_gecerli": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "product_line": {
        "value": "BEVERAGE",
        "data_type": "dropdown",
        "label": "BEVERAGE"
      },
      "integration_attributeId_8": {
        "value": "1,7lt",
        "data_type": "dropdown",
        "label": "1,7 L"
      },
      "erp_marka": {
        "value": "01",
        "data_type": "dropdown",
        "label": "TEFAL"
      },
      "integration_defoluflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_defoluflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_serisonuflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "integration_serisonuflg": {
        "value": "false",
        "data_type": "dropdown",
        "label": "false"
      },
      "erp_is_seo_automatic": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      },
      "integration_attributeId_22": {
        "value": "Siyah",
        "data_type": "dropdown",
        "label": "Siyah"
      },
      "erp_gecerli": {
        "value": "true",
        "data_type": "dropdown",
        "label": "true"
      }
    },
    "extra_attributes": {
      "top_seller": false
    },
    "productimage_set": [
      {
        "pk": 4841,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2020/11/02/2194/38d235f9-c846-4e34-b314-b6a55a91c16f.jpg",
        "order": 1,
        "created_date": "2021-03-05T18:31:19.111562Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 4842,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2020/11/02/2194/40938c58-a08d-4582-a8e9-704d627e8179.jpg",
        "order": 2,
        "created_date": "2021-03-05T18:31:19.186783Z",
        "specialimage_set": [

        ]
      },
      {
        "pk": 4843,
        "status": "active",
        "image": "https://tefal.akinoncdn.com/products/2020/11/02/2194/81e7116d-0bdb-426e-80b7-67266a987ac4.jpg",
        "order": 3,
        "created_date": "2021-03-05T18:31:19.250437Z",
        "specialimage_set": [

        ]
      }
    ],
    "price": "1999.90",
    "in_stock": false,
    "currency_type": "try",
    "retail_price": "1999.90",
    "unit_type": "qty",
    "absolute_url": "/display-digital-su-isiticisi-1-7-l-7211003827/",
    "productvideo_set": [

    ],
    "product_type": "0",
    "price_type": "default",
    "form_schema": null,
    "is_ready_to_basket": true,
    "stock": 0,
    "data_source": null,
    "basket_offers": [

    ],
    "extra_data": {
      "variants": [

      ]
    }
  },
]

export default function MiniBasket() {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Sepet</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Kapat</span>
                            X
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.productimage_set[0].image}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Sil
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Toplam</p>
                        <p>262 TL</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Ödeme sırasında hesaplanan nakliye ve vergiler</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Siparişi Tamamla
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <span className='mr-2'>veya</span>
                        <p>

                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Alışverişe devam et
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
