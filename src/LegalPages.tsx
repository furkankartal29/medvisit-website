import { useState } from 'react';
import { Globe, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const termsContent = {
    en: {
        title: 'Medvisit User Agreement (Terms of Service)',
        lastUpdated: 'March 9, 2026',
        intro: 'PLEASE READ THIS AGREEMENT CAREFULLY. IT CONTAINS IMPORTANT LIMITATIONS OF LIABILITY, INDEMNIFICATION OBLIGATIONS, AND A GOVERNING LAW AND JURISDICTION CLAUSE THAT AFFECTS YOUR LEGAL RIGHTS.\n\nThis User Agreement (the "Agreement" or "Terms") is a legally binding contract between you (the "User", "Practitioner", or "Customer") and Medvisit ("Medvisit", "we", "us", or "our"). By downloading, installing, accessing, or using the Medvisit mobile application and related services (collectively, the "Service"), you expressly acknowledge that you have read, understood, and agree to be bound by this Agreement.\n\nIf you are entering into this Agreement on behalf of a clinic, company, or other legal entity, you represent that you have the authority to bind such entity to these Terms.',
        sections: [
            {
                title: '1. Nature of the Service',
                content: '1.1. B2B SaaS Platform. Medvisit is a business-to-business (B2B) Software-as-a-Service administrative, scheduling, and financial tracking tool designed strictly for independent healthcare professionals, therapists, and clinic managers.\n\n1.2. License Grant. Subject to your compliance with this Agreement and payment of applicable fees, Medvisit grants you a limited, non-exclusive, non-transferable, revocable license to use the Service solely for your internal professional business operations.'
            },
            {
                title: '2. Medical Disclaimer (Strict Limitation)',
                content: '2.1. NOT AN EMR/EHR. MEDVISIT IS STRICTLY AN ADMINISTRATIVE TOOL. IT IS NOT AN ELECTRONIC MEDICAL RECORD (EMR) OR ELECTRONIC HEALTH RECORD (EHR) SYSTEM AND MUST NOT BE USED AS THE PRIMARY REPOSITORY FOR CLINICAL MEDICAL RECORDS.\n\n2.2. No Medical Advice or Liability. Medvisit does not provide medical advice, diagnoses, or treatment. You, as the Practitioner, retain exclusive and absolute responsibility for all medical care, advice, and treatment provided to your patients. Medvisit expressly disclaims any liability for medical malpractice, professional negligence, missed appointments, or disputes arising between you and your patients.'
            },
            {
                title: '3. Subscriptions, Billing, and In-App Purchases',
                content: '3.1. Free Tier. Users may utilize the Service to manage up to twenty (20) appointments per calendar month at no cost.\n\n3.2. Solo Pro Subscription. To access unlimited appointments and premium administrative features, Users must subscribe to the "Solo Pro" plan via In-App Purchases (IAP).\n\n3.3. Payment and Auto-Renewal. All subscription fees are processed directly through your Apple ID or Google Play account at the confirmation of purchase. Subscriptions automatically renew unless canceled at least twenty-four (24) hours prior to the end of the current billing cycle.\n\n3.4. Cancellations and Refunds. You may manage or cancel your subscription through your device\'s account settings. All payments are non-refundable to the maximum extent permitted by law, subject solely to the respective refund policies of Apple Inc. and Google LLC.'
            },
            {
                title: '4. Data Privacy and HIPAA Compliance',
                content: '4.1. Roles of the Parties. In relation to patient data entered into the Service, you act as the "Data Controller" (or "Covered Entity" under U.S. law), and Medvisit acts strictly as the "Data Processor" (or "Business Associate").\n\n4.2. HIPAA Obligations. For Users subject to the U.S. Health Insurance Portability and Accountability Act (HIPAA), Medvisit will maintain appropriate administrative, physical, and technical safeguards. However, Users expressly agree not to enter highly sensitive Protected Health Information (PHI) or detailed clinical notes into unstructured text fields unless strictly necessary for basic scheduling.\n\n4.3. User Consents. It is your sole, non-delegable responsibility to obtain and maintain all necessary legal consents and authorizations from your patients prior to entering their names, contact details, or any other personally identifiable information into the Service.'
            },
            {
                title: '5. Intellectual Property and Restrictions',
                content: 'Medvisit retains all rights, title, and interest in and to the Service, including all underlying software, algorithms, user interfaces, and trademarks. You shall not (and shall not permit any third party to):\n\n(a) Reverse engineer, decompile, or disassemble the Service;\n(b) Use the Service to build a competitive product;\n(c) Rent, lease, or sublicense the Service; or\n(d) Circumvent any security or technological measures of the App.'
            },
            {
                title: '6. Indemnification',
                content: 'You agree to indemnify, defend, and hold harmless Medvisit, its affiliates, directors, officers, and employees from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney\'s fees) arising from:\n\n(i) Your use of and access to the Service;\n(ii) Your violation of any term of this Agreement;\n(iii) Any claim of medical malpractice, negligence, or injury brought by your patients; or\n(iv) Your violation of any applicable data protection laws (including HIPAA, GDPR, or KVKK).'
            },
            {
                title: '7. Limitation of Liability',
                content: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MEDVISIT BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES. MEDVISIT\'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL AMOUNTS PAID BY YOU TO MEDVISIT DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE CLAIM.'
            },
            {
                title: '8. Governing Law and Dispute Resolution',
                content: '8.1. Governing Law. This Agreement, and any dispute arising out of or related to it, shall be governed by and construed in accordance with the laws of the Republic of Turkey, without giving effect to any conflict of law principles.\n\n8.2. Exclusive Jurisdiction. You expressly agree that the exclusive jurisdiction and venue for any legal action, suit, or proceeding arising out of or relating to this Agreement shall be the Courts and Execution Offices of Istanbul (Çağlayan), Turkey. You hereby irrevocably consent to the personal jurisdiction of such courts.\n\n8.3. Class Action Waiver. ALL CLAIMS MUST BE BROUGHT IN THE PARTIES\' INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION, COLLECTIVE ACTION, OR REPRESENTATIVE PROCEEDING.'
            },
            {
                title: '9. Miscellaneous',
                content: '9.1. Entire Agreement. This Agreement, along with our Privacy Policy, constitutes the entire legal agreement between you and Medvisit.\n\n9.2. Severability. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.'
            },
            {
                title: '10. Contact Information',
                content: 'For legal notices or support inquiries, please contact:\nEmail: support@medvisitapp.com'
            }
        ]
    },
    tr: {
        title: 'Medvisit Kullanıcı Sözleşmesi (Hizmet Şartları)',
        lastUpdated: '9 Mart 2026',
        intro: 'LÜTFEN İŞBU SÖZLEŞMEYİ DİKKATLİCE OKUYUNUZ. BU SÖZLEŞME; SORUMLULUĞUN SINIRLANDIRILMASI, TAZMİNAT YÜKÜMLÜLÜKLERİ VE YASAL HAKLARINIZI DOĞRUDAN ETKİLEYEN UYGULANACAK HUKUK VE YETKİLİ MAHKEME HÜKÜMLERİ İÇERMEKTEDİR.\n\nİşbu Kullanıcı Sözleşmesi ("Sözleşme" veya "Şartlar"), sizinle ("Kullanıcı", "Uygulayıcı" veya "Müşteri") Medvisit ("Medvisit", "biz" veya "Şirket") arasında akdedilmiş yasal olarak bağlayıcı bir sözleşmedir. Medvisit mobil uygulamasını ve ilgili hizmetleri (birlikte "Hizmet") indirerek, kurarak, erişerek veya kullanarak, işbu Sözleşme\'yi okuduğunuzu, anladığınızı ve bağlayıcılığını gayrikabili rücu olarak kabul ettiğinizi beyan edersiniz.\n\nEğer bu Sözleşme\'ye bir klinik, şirket veya başka bir tüzel kişi adına taraf oluyorsanız, söz konusu tüzel kişiyi bu Şartlar ile bağlama yetkisine sahip olduğunuzu kabul ve taahhüt edersiniz.',
        sections: [
            {
                title: '1. Hizmetin Niteliği',
                content: '1.1. B2B SaaS Platformu. Medvisit; münhasıran bağımsız sağlık profesyonelleri, terapistler ve klinik yöneticileri için tasarlanmış işletmeden işletmeye (B2B) hizmet veren bir yazılım (SaaS), randevu planlama ve finansal takip aracıdır.\n\n1.2. Lisans Verilmesi. İşbu Sözleşme şartlarına uymanız ve geçerli ücretleri ödemeniz kaydıyla, Medvisit size Hizmet\'i yalnızca kendi iç profesyonel ticari/mesleki faaliyetleriniz için kullanmanız amacıyla sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans vermektedir.'
            },
            {
                title: '2. Tıbbi Sorumluluk Reddi (Kesin Sınırlama)',
                content: '2.1. EMR/EHR DEĞİLDİR. MEDVİSİT KESİNLİKLE İDARİ BİR ARAÇTIR. BİR ELEKTRONİK TIBBİ KAYIT (EMR) VEYA ELEKTRONİK SAĞLIK KAYDI (EHR) SİSTEMİ DEĞİLDİR VE KLİNİK TIBBİ KAYITLAR İÇİN BİRİNCİL DEPOLAMA ALANI OLARAK KULLANILMAMALIDIR.\n\n2.2. Tıbbi Tavsiye ve Sorumluluğun Bulunmaması. Medvisit tıbbi tavsiye, teşhis veya tedavi sağlamaz. Hastalarınıza sağlanan tüm tıbbi bakım, tavsiye ve tedavilerin münhasır ve mutlak sorumluluğu Uygulayıcı olarak size aittir. Medvisit; tıbbi hatalardan (malpraktis), mesleki ihmalden, kaçırılan randevulardan veya sizinle hastalarınız arasında doğabilecek herhangi bir uyuşmazlıktan dolayı hiçbir sorumluluk kabul etmez.'
            },
            {
                title: '3. Abonelikler, Faturalandırma ve Uygulama İçi Satın Alımlar',
                content: '3.1. Ücretsiz Plan. Kullanıcılar, takvim ayı başına en fazla yirmi (20) randevuyu yönetmek için Hizmet\'i ücretsiz olarak kullanabilirler.\n\n3.2. Solo Pro Aboneliği. Sınırsız randevu kapasitesine ve premium idari özelliklere erişmek için Kullanıcıların Uygulama İçi Satın Alma (IAP) yoluyla "Solo Pro" planına abone olmaları gerekmektedir.\n\n3.3. Ödeme ve Otomatik Yenileme. Tüm abonelik ücretleri, satın alma onayı ile birlikte doğrudan Apple kimliğiniz veya Google Play hesabınız üzerinden tahsil edilir. Abonelikler, mevcut fatura döneminin bitiminden en az yirmi dört (24) saat önce iptal edilmediği sürece otomatik olarak yenilenir.\n\n3.4. İptal ve İadeler. Aboneliğinizi cihazınızın hesap ayarlarından yönetebilir veya iptal edebilirsiniz. Yürürlükteki kanunların izin verdiği azami ölçüde tüm ödemeler iade edilemez niteliktedir ve iade talepleri münhasıran Apple Inc. ve Google LLC\'nin ilgili iade politikalarına tabidir.'
            },
            {
                title: '4. Veri Gizliliği ve KVKK Uyumu',
                content: '4.1. Tarafların Rolleri. Hizmet\'e girilen hasta verilerine ilişkin olarak siz "Veri Sorumlusu", Medvisit ise kesinlikle "Veri İşleyen" sıfatıyla hareket etmektedir.\n\n4.2. Hassas Veri Girişi Kısıtlaması. Kullanıcılar, temel randevu planlaması için kesinlikle gerekli olmadıkça, yapılandırılmamış metin alanlarına (ör. randevu notları) Özel Nitelikli Kişisel Verileri (sağlık verileri vb.) veya detaylı klinik notları girmemeyi açıkça kabul ve taahhüt eder.\n\n4.3. Kullanıcı Onamları. Hizmet\'e hastaların adlarını, iletişim bilgilerini veya diğer kişisel verilerini girmeden önce, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) başta olmak üzere ilgili mevzuat uyarınca gereken tüm aydınlatmaların yapılması ve açık rızaların (onamların) alınması Kullanıcının münhasır ve devredilemez sorumluluğundadır.'
            },
            {
                title: '5. Fikri Mülkiyet ve Kısıtlamalar',
                content: 'Medvisit; altta yatan tüm yazılımlar, algoritmalar, kullanıcı arayüzleri ve ticari markalar dahil olmak üzere Hizmet üzerindeki tüm hak, mülkiyet ve menfaatleri saklı tutar. Kullanıcı aşağıdakileri yapmayacağını (ve üçüncü taraflara izin vermeyeceğini) kabul eder:\n\n(a) Hizmet\'i tersine mühendisliğe tabi tutmak, kaynak koduna dönüştürmek veya parçalarına ayırmak;\n(b) Hizmet\'i rakip bir ürün geliştirmek için kullanmak;\n(c) Uygulamanın herhangi bir güvenlik veya teknolojik önlemini atlatmak.'
            },
            {
                title: '6. Tazmin Yükümlülüğü (Indemnification)',
                content: 'Aşağıdaki durumlardan kaynaklanan veya bunlarla bağlantılı olarak ortaya çıkan her türlü iddia, zarar, yükümlülük, kayıp, borç ve masrafa (avukatlık ücretleri dahil ancak bunlarla sınırlı olmamak üzere) karşı Medvisit\'i, iştiraklerini, yöneticilerini ve çalışanlarını savunmayı, zararlarını tazmin etmeyi ve onları beri kılmayı kabul edersiniz:\n\n(i) Hizmet\'i kullanımınız ve Hizmet\'e erişiminiz;\n(ii) İşbu Sözleşme\'nin herhangi bir şartını ihlal etmeniz;\n(iii) Hastalarınız tarafından ileri sürülen her türlü tıbbi hata, ihmal veya yaralanma iddiası; veya\n(iv) Geçerli veri koruma yasalarını (KVKK, GDPR veya HIPAA dahil) ihlal etmeniz.'
            },
            {
                title: '7. Sorumluluğun Sınırlandırılması',
                content: 'YÜRÜRLÜKTEKİ MEVZUATIN İZİN VERDİĞİ AZAMİ ÖLÇÜDE, MEDVİSİT HİÇBİR DURUMDA KÂR KAYBI, İTİBAR, KULLANIM, VERİ VEYA DİĞER SOYUT KAYIPLAR İÇİN TAZMİNATLAR DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE HİÇBİR DOLAYLI, CEZAİ, ARIZİ, ÖZEL VEYA NETİCE KABİLİ ZARARDAN SORUMLU OLMAYACAKTIR. MEDVİSİT\'İN İŞBU SÖZLEŞME\'DEN KAYNAKLANAN VEYA BUNUNLA İLGİLİ OLAN TOPLAM KÜMÜLATİF SORUMLULUĞU, İDDİAYA KONU OLAYDAN ÖNCEKİ ON İKİ (12) AY İÇİNDE HİZMET İÇİN SİZİN TARAFINIZDAN MEDVİSİT\'E ÖDENEN TOPLAM MİKTARI AŞMAYACAKTIR.'
            },
            {
                title: '8. Uygulanacak Hukuk ve Uyuşmazlıkların Çözümü',
                content: '8.1. Uygulanacak Hukuk. İşbu Sözleşme ve Sözleşme\'den kaynaklanan veya bununla bağlantılı olan her türlü uyuşmazlık, kanunlar ihtilafı kurallarına bakılmaksızın Türkiye Cumhuriyeti Kanunları\'na tabidir.\n\n8.2. Münhasır Yetkili Mahkeme. İşbu Sözleşme\'den veya Hizmet\'ten doğacak veya bunlarla bağlantılı her türlü yasal dava, uyuşmazlık veya takibin çözümünde İstanbul (Çağlayan) Mahkemeleri ve İcra Dairelerinin münhasır yetkili olduğunu açıkça kabul edersiniz. Bu mahkemelerin kişisel yargı yetkisine tabi olduğunuzu gayrikabili rücu olarak kabul edersiniz.'
            },
            {
                title: '9. Sair Hükümler',
                content: '9.1. Bütünlük. İşbu Sözleşme, Gizlilik Politikamız ile birlikte, sizinle Medvisit arasındaki hukuki sözleşmenin tamamını oluşturur.\n\n9.2. Bölünebilirlik. İşbu Sözleşme\'nin herhangi bir hükmünün geçersiz veya uygulanamaz bulunması halinde, geri kalan hükümler tam olarak yürürlükte kalmaya devam edecektir.'
            },
            {
                title: '10. İletişim Bilgileri',
                content: 'Yasal bildirimler veya destek talepleri için lütfen bizimle iletişime geçin:\nE-posta: support@medvisitapp.com'
            }
        ]
    }
};

const privacyContent = {
    en: {
        title: 'Medvisit Privacy Policy',
        lastUpdated: 'March 9, 2026',
        intro: 'Medvisit ("Medvisit", "we", "us", or "our") provides a professional B2B SaaS platform for healthcare administrative management. This Privacy Policy outlines how we handle data within our global operations, ensuring transparency and security for our Users and their Patients.',
        sections: [
            {
                title: '1. Data Processing Roles',
                content: 'Customer (Practitioner/Clinic): You are the Data Controller. You own the data you enter and are responsible for obtaining necessary patient consents.\n\nMedvisit: We act as the Data Processor. We process data only to provide the services requested by you, acting as a Business Associate for our U.S.-based users under HIPAA.'
            },
            {
                title: '2. Information We Collect',
                content: '2.1. Account Information: We collect your name, professional title, specialty, and contact details (email/phone) to manage your account.\n\n2.2. Patient Administrative Data: You may enter patient names and contact information for scheduling purposes.\n\nImportant: Medvisit is an administrative tool, not an EMR. We discourage the entry of sensitive clinical medical histories into unstructured text fields.\n\n2.3. Billing Data: Subscriptions are processed via Apple App Store or Google Play Store. We do not store or process your full credit card information directly.'
            },
            {
                title: '3. HIPAA & Global Standards',
                content: 'For our users handling Protected Health Information (PHI) in the United States, we maintain:\n\n• Technical Safeguards: All data is encrypted at rest (AES-256) and in transit (TLS 1.2+).\n• Business Associate Agreement (BAA): We are prepared to enter into BAAs with our Professional users to ensure HIPAA-compliant data handling.'
            },
            {
                title: '4. How We Share Data',
                content: 'We do not sell, rent, or trade personal data. We only share information with authorized Sub-processors necessary to provide the Service:\n\n• Cloud Infrastructure: Secure hosting (e.g., AWS or Google Cloud).\n• Support & Analytics: Tools used solely for monitoring app performance and providing technical support.\n• App Stores: Apple and Google for subscription management.'
            },
            {
                title: '5. Data Security & Retention',
                content: 'Security: We implement industry-standard physical and digital security measures to prevent unauthorized access.\n\nRetention: We retain data only for as long as your account is active or as required by law. You may request data deletion at any time, subject to legal retention obligations.'
            },
            {
                title: '6. International Data Transfers',
                content: 'Your data may be stored and processed in secure data centers globally. By using the Service, you consent to the transfer of information to countries outside of your residence, provided that adequate security measures are in place.'
            },
            {
                title: '7. Governing Law & Jurisdiction',
                content: 'This Privacy Policy shall be governed by the laws of the Republic of Turkey. Any disputes arising from this Policy shall be settled exclusively in the Courts and Execution Offices of Istanbul, Turkey.'
            },
            {
                title: '8. Contact Us',
                content: 'For any privacy-related inquiries, please contact:\nEmail: support@medvisitapp.com'
            }
        ]
    },
    tr: {
        title: 'Medvisit Gizlilik Politikası (Privacy Policy)',
        lastUpdated: '9 Mart 2026',
        intro: 'İşbu Gizlilik Politikası ("Politika"), Medvisit ("Medvisit", "biz" veya "Şirket") tarafından sunulan B2B (işletmeden işletmeye) SaaS randevu ve idari yönetim platformunun ("Hizmet") kullanımı sırasında elde edilen kişisel verilerin işlenmesine ilişkin şartları düzenlemektedir. İşbu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili ikincil mevzuat uyarınca şeffaflık ve aydınlatma yükümlülüklerinin ifası amacıyla hazırlanmıştır.',
        sections: [
            {
                title: '1. Veri Sorumlusu ve Veri İşleyen Sıfatları (Kritik Ayrım)',
                content: 'Medvisit\'in hukuki statüsü, işlenen verinin aidiyetine göre kesin olarak ayrılmaktadır:\n\n1.1. Kullanıcı/Uygulayıcı Verileri: Medvisit uygulamasında hesap oluşturan sağlık profesyonellerine (Kullanıcı) ait kişisel veriler (ad, e-posta, unvan vb.) bakımından Medvisit "Veri Sorumlusu" sıfatını haizdir.\n\n1.2. Hasta Verileri (İdari Veriler): Kullanıcı tarafından Hizmet\'e girilen, hastalarına ait randevu ve iletişim bilgileri bakımından Kullanıcı münhasıran "Veri Sorumlusu", Medvisit ise Kullanıcı\'nın talimatları doğrultusunda ve yalnızca sistemin teknik altyapısını sağlamak amacıyla hareket eden "Veri İşleyen" statüsündedir.'
            },
            {
                title: '2. İşlenen Kişisel Veri Kategorileri ve İşleme Amaçları',
                content: 'Medvisit, Hizmet\'in ifası kapsamında aşağıdaki veri kategorilerini işlemektedir:\n\n• Hesap ve İletişim Bilgileri: Kullanıcının adı, soyadı, mesleki unvanı, e-posta adresi ve telefon numarası; kullanıcı hesabının oluşturulması, kimlik doğrulama, teknik destek sağlanması ve sistem bildirimlerinin iletilmesi amaçlarıyla işlenir.\n\n• Müşteri (Hasta) İdari Verileri: Kullanıcı tarafından platforma dahil edilen hasta adları ve iletişim bilgileri; salt randevu yönetimi ve idari takibin sağlanması amacıyla işlenir. (Medvisit bir EMR sistemi olmadığından, bu alanlara Özel Nitelikli Kişisel Veri mahiyetindeki klinik sağlık verilerinin girilmemesi esastır.)\n\n• Finansal ve Abonelik Verileri: Uygulama İçi Satın Alma (IAP) süreçleri doğrudan Apple App Store ve Google Play Store altyapıları üzerinden yürütüldüğünden, Medvisit kullanıcıların kredi kartı veya tam ödeme verilerini sunucularında barındırmaz; yalnızca abonelik durumuna ilişkin teyit verilerini (token) işler.'
            },
            {
                title: '3. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri',
                content: 'Kişisel verileriniz, KVKK\'nın 5. ve 6. maddelerinde belirtilen işleme şartları çerçevesinde;\n\n• Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması (Medvisit Kullanıcı Sözleşmesi\'nin ifası),\n\n• Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,\n\n• İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması\n\nhukuki sebeplerine dayanılarak otomatik veya kısmen otomatik yollarla işlenmektedir.'
            },
            {
                title: '4. Kişisel Verilerin Aktarımı ve Alt İşlemciler',
                content: 'Medvisit, kişisel verileri hiçbir surette üçüncü taraflara satmaz veya ticari amaçla kiralamaz. Ancak, Hizmet\'in kesintisiz ve güvenli bir şekilde sunulabilmesi teknik bir zorunluluk olduğundan, veriler katı gizlilik sözleşmeleri (DPA) çerçevesinde aşağıdaki kategorilerdeki alt işlemcilere aktarılabilir:\n\n• Bulut Bilişim ve Barındırma Sağlayıcıları: Verilerin güvenli bir şekilde depolanması amacıyla şifrelenmiş sunucu altyapıları (örn. AWS, Google Cloud).\n\n• Ödeme Altyapı Sağlayıcıları: Abonelik ve faturalandırma süreçlerinin yönetimi için (Apple, Google).\n\n• İletişim Servisleri: Sistem uyarıları ve e-posta bildirimlerinin iletilmesi amacıyla kullanılan altyapılar.'
            },
            {
                title: '5. Veri Güvenliği ve Saklama Süreleri',
                content: '5.1. Teknik Tedbirler: Medvisit, kişisel verilerin hukuka aykırı olarak işlenmesini ve verilere hukuka aykırı olarak erişilmesini önlemek amacıyla, endüstri standardı olan AES-256 şifreleme teknolojileri ve TLS (Transport Layer Security) protokolleri dahil olmak üzere uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve idari tedbiri almaktadır.\n\n5.2. Saklama ve İmha: Kişisel veriler, işlenme amaçlarının gerektirdiği süre boyunca veya ilgili mevzuatta öngörülen yasal saklama süreleri (zamanaşımı süreleri vb.) dolana kadar muhafaza edilir. Sürelerin bitiminde veriler, Şirket\'in veri imha politikalarına uygun olarak silinir, yok edilir veya anonim hale getirilir.'
            },
            {
                title: '6. İlgili Kişinin Hakları (KVKK Madde 11)',
                content: 'KVKK\'nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme ve bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme haklarına sahiptir.'
            },
            {
                title: '7. İletişim',
                content: 'İşbu Politika kapsamında yer alan haklarınızı kullanmak veya veri gizliliğine ilişkin her türlü bildirim ve talebiniz için tarafımıza aşağıdaki kanaldan ulaşabilirsiniz:\nE-posta: support@medvisitapp.com'
            }
        ]
    }
};

const dpaContent = {
    en: {
        title: 'Medvisit Data Processing Addendum (DPA)',
        lastUpdated: 'March 9, 2026',
        intro: 'This Data Processing Addendum ("DPA") forms part of the Medvisit Terms of Service ("Agreement") between Medvisit and the Customer (the healthcare professional or clinic using the Service).',
        sections: [
            {
                title: '1. Definitions',
                content: '"Controller" refers to the Customer who determines the purposes and means of processing Personal Data.\n\n"Processor" refers to Medvisit, which processes Personal Data on behalf of the Controller.\n\n"Personal Data" means any information relating to an identified or identifiable natural person (including Patients).\n\n"PHI" refers to Protected Health Information as defined under HIPAA (U.S.).'
            },
            {
                title: '2. Scope and Role',
                content: '2.1. Processing: Medvisit shall process Personal Data only for the purposes of providing the administrative, scheduling, and financial tracking services outlined in the Agreement.\n\n2.2. Roles: The Customer acts as a Data Controller, and Medvisit acts as a Data Processor. Where HIPAA applies, this DPA, together with our standard Business Associate Agreement (BAA) terms, governs the handling of PHI.'
            },
            {
                title: '3. Medvisit Obligations',
                content: '3.1. Instructions: Medvisit shall process data only on documented instructions from the Customer.\n\n3.2. Confidentiality: Medvisit ensures that persons authorized to process the data have committed themselves to confidentiality.\n\n3.3. Security: Medvisit shall implement appropriate technical and organizational measures (e.g., AES-256 encryption, TLS protocols) to ensure a level of security appropriate to the risk.'
            },
            {
                title: '4. Sub-Processors',
                content: 'The Customer grants Medvisit general authorization to engage Sub-processors to provide the Service. Medvisit remains fully liable for the performance of the Sub-processor\'s obligations.\n\nApproved Sub-processors:\n\n• AWS / Google Cloud — Secure Cloud Infrastructure & Data Hosting (USA / Global)\n• Apple / Google Play — Subscription Management & In-App Payments (Global)\n• SendGrid / Twilio — Appointment Notifications & System Emails (USA)\n• Firebase — Real-time Database & Crash Reporting (USA)'
            },
            {
                title: '5. Data Subject Rights',
                content: 'Medvisit shall, to the extent legally permitted, promptly notify the Customer if it receives a request from a Patient (Data Subject) to exercise their rights (e.g., access, deletion). Medvisit will provide reasonable assistance to the Customer to fulfill these requests.'
            },
            {
                title: '6. Data Breach Notification',
                content: 'In the event of a confirmed security breach leading to the accidental or unlawful destruction, loss, or unauthorized disclosure of Personal Data, Medvisit shall notify the Customer without undue delay (typically within 48-72 hours) after becoming aware of the breach.'
            },
            {
                title: '7. Data Deletion and Return',
                content: 'Upon termination of the Agreement, Medvisit shall, at the choice of the Customer, delete or return all Personal Data to the Customer, unless legal obligations require continued storage of the data.'
            },
            {
                title: '8. Governing Law',
                content: 'This DPA is governed by the laws of the Republic of Turkey. All disputes shall be resolved by the Courts and Execution Offices of Istanbul, Turkey.'
            }
        ]
    },
    tr: {
        title: 'Medvisit Veri İşleme ve Aydınlatma Metni (DPA)',
        lastUpdated: '9 Mart 2026',
        intro: 'İşbu Veri İşleme ve Aydınlatma Metni ("Metin" veya "DPA"), Medvisit Kullanıcı Sözleşmesi\'nin ("Sözleşme") ayrılmaz bir parçasıdır. İşbu Metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili ikincil mevzuat uyarınca, Medvisit platformu ("Hizmet") üzerinden işlenen kişisel verilerin güvenliği, işleme şartları ve tarafların teknik/idari sorumluluklarını düzenlemek amacıyla hazırlanmıştır.',
        sections: [
            {
                title: '1. Tarafların Hukuki Niteliği ve Rolü',
                content: 'Hizmet\'in B2B (işletmeden işletmeye) SaaS yapısı gereği, platforma girilen kişisel verilere ilişkin sorumluluklar KVKK kapsamında kesin olarak ayrılmıştır:\n\n1.1. Veri Sorumlusu (Müşteri/Uygulayıcı): Hizmet\'i kullanan sağlık profesyoneli, klinik veya yönetici; kendi hastalarına ait kimlik, iletişim ve randevu verilerinin sisteme girilmesinden, bu verilerin doğruluğundan ve ilgili kişilerden (hastalardan) KVKK uyarınca aydınlatma yapılması ve gerektiğinde açık rızalarının alınmasından münhasıran sorumludur.\n\n1.2. Veri İşleyen (Medvisit): Medvisit, Kullanıcı\'nın talimatları doğrultusunda ve yalnızca Sözleşme\'de belirtilen idari ve finansal takip hizmetlerinin sunulması amacıyla sisteme girilen verileri işleyen, teknik altyapıyı sağlayan taraftır.'
            },
            {
                title: '2. Veri İşlemenin Kapsamı ve Sınırları',
                content: 'Medvisit, Kullanıcı tarafından sağlanan kişisel verileri yalnızca aşağıdaki amaçlar ve sınırlar dahilinde işleyecektir:\n\n• Hizmetin İfası: Randevu planlama, takvim yönetimi ve sistem bildirimlerinin (SMS/E-posta) iletilmesi.\n\n• Tıbbi/Klinik Veri Kısıtlaması: Medvisit bir Elektronik Tıbbi Kayıt (EMR) sistemi olmadığından, Kullanıcı, platformdaki serbest metin alanlarına (ör. notlar) hastaların teşhis, tedavi veya klinik geçmişlerine dair "Özel Nitelikli Kişisel Veri" girmemeyi kabul ve taahhüt eder.\n\n• Gizlilik Taahhüdü: Medvisit, verileri işlemekle yetkilendirdiği personelinin gizlilik yükümlülüklerine tabi olmasını sağlar ve verileri Sözleşme amacı dışında hiçbir ticari amaçla (satış, kiralama vb.) kullanmaz.'
            },
            {
                title: '3. Alt İşlemciler (Sub-Processors) ve Veri Aktarımı',
                content: 'Kullanıcı, Medvisit\'in Hizmet\'i sunabilmek ve teknik altyapıyı kesintisiz sağlayabilmek amacıyla üçüncü taraf hizmet sağlayıcıları ("Alt İşlemciler") kullanmasına peşinen onay vermektedir. Medvisit, yalnızca KVKK ve ilgili veri güvenliği standartlarına (AES-256 şifreleme, TLS vb.) uyum taahhüdü veren Alt İşlemciler ile çalışmaktadır.\n\nKullanılan Temel Alt İşlemci Kategorileri:\n\n• Bulut Bilişim ve Veri Barındırma: Verilerin güvenli, şifrelenmiş sunucularda depolanması ve yedeklenmesi (Örn. AWS, Google Cloud gibi global veya yerel veri merkezleri).\n\n• İletişim ve Bildirim Altyapıları: Randevu hatırlatmaları, sistem bildirimleri ve e-posta iletim hizmetleri.\n\n• Ödeme Sistemleri: Uygulama İçi Satın Alma (IAP) süreçlerinin yürütülmesi (Apple App Store, Google Play Store altyapıları).'
            },
            {
                title: '4. Veri Güvenliği ve İhlal Bildirimi',
                content: '4.1. Teknik Tedbirler: Medvisit, işlenen kişisel verilerin hukuka aykırı olarak erişilmesini, değiştirilmesini veya ifşa edilmesini önlemek amacıyla, riskin niteliğine uygun düzeyde teknik ve idari güvenlik önlemlerini (şifreleme, erişim loglaması, güvenlik duvarları) alır ve sürdürür.\n\n4.2. İhlal Bildirimi: Medvisit, sistemlerindeki kişisel verilere yönelik kanıtlanmış bir güvenlik ihlali veya yetkisiz erişim tespit etmesi halinde, bu durumu makul olan en kısa sürede (genellikle ihlalin tespitinden itibaren 72 saat içinde) Kullanıcı\'ya bildirecektir. İlgili kişilere ve Kişisel Verileri Koruma Kuruluna (KVKK) yapılacak bildirimlerin yasal sorumluluğu Veri Sorumlusu sıfatıyla Kullanıcı\'ya aittir.'
            },
            {
                title: '5. Verilerin İadesi ve İmhası',
                content: 'Sözleşme\'nin herhangi bir nedenle sona ermesi halinde Medvisit, Kullanıcı\'nın talebi üzerine veya yasal saklama sürelerinin dolmasını müteakip, sistemlerinde bulunan Kullanıcı\'ya ve hastalarına ait tüm kişisel verileri, yürürlükteki mevzuata ve Şirket\'in veri imha politikalarına uygun olarak silecek, yok edecek veya anonim hale getirecektir.'
            },
            {
                title: '6. Veri Sahibinin Haklarının Kullanılması',
                content: 'İlgili kişilerin (hastaların) KVKK\'nın 11. maddesi kapsamındaki haklarını (erişim, düzeltme, silme vb.) kullanma talepleri öncelikle Veri Sorumlusu olan Kullanıcı\'ya yöneltilmelidir. Medvisit, sistem altyapısının elverdiği ölçüde ve makul sınırlar dahilinde, Kullanıcı\'nın bu talepleri yerine getirmesine teknik destek sağlayacaktır.'
            },
            {
                title: '7. İletişim',
                content: 'Veri işleme süreçleri veya bu metinle ilgili her türlü teknik ve hukuki soru için tarafımıza aşağıdaki kanaldan ulaşabilirsiniz:\nE-posta: support@medvisitapp.com'
            }
        ]
    }
};

const faqContent = {
    en: {
        title: 'Frequently Asked Questions (FAQ)',
        lastUpdated: 'April 2026',
        intro: 'Find answers to the most common questions about Medvisit, your smart clinic management tool.',
        sections: [
            {
                title: 'What is Medvisit?',
                content: "Medvisit is a business-to-business (B2B) Software-as-a-Service tool designed exclusively for independent healthcare professionals, therapists, and clinic managers. It helps you manage scheduling, package sessions, and track your clinic's finances all in one place."
            },
            {
                title: 'Is Medvisit free to use?',
                content: 'Yes! Our Free tier allows you to effortlessly manage up to twenty (20) appointments every calendar month at no cost. If you need unlimited appointments and premium features like expense tracking, you can upgrade to the Solo Pro plan.'
            },
            {
                title: 'Is my patient data secure?',
                content: 'Absolutely. We use industry-standard physical and digital security measures, including AES-256 encryption at rest and TLS 1.2+ in transit. We act strictly as a Data Processor and align with global privacy standards like HIPAA and GDPR.'
            },
            {
                title: 'Can I use it on multiple devices?',
                content: 'While the free tier is limited to a single device, upgrading to the Solo Pro tier grants you the ability to synchronize your schedule and financial tracking data seamlessly across multiple devices through your account.'
            },
            {
                title: 'How do I cancel my subscription?',
                content: "All subscriptions are processing securely via the Apple App Store or Google Play Store. You can manage, upgrade, or cancel your Solo Pro subscription at any time directly through your device's native account subscription settings."
            }
        ]
    },
    tr: {
        title: 'Sıkça Sorulan Sorular (SSS)',
        lastUpdated: 'Nisan 2026',
        intro: 'Akıllı klinik yönetim aracınız Medvisit hakkında en çok merak edilen soruların cevaplarını burada bulabilirsiniz.',
        sections: [
            {
                title: 'Medvisit nedir?',
                content: 'Medvisit; münhasıran bağımsız sağlık profesyonelleri, terapistler ve klinik yöneticileri için tasarlanmış bir randevu planlama, paket seans yönetimi ve finansal takip uygulamasıdır. Pratiğinizi tek bir ekrandan yönetmenizi sağlar.'
            },
            {
                title: 'Medvisit tamamen ücretsiz mi?',
                content: 'Evet! Ücretsiz planımız sayesinde her takvim ayında yirmi (20) randevuya kadar sistemi hiçbir ücret ödemeden kullanabilirsiniz. Sınırsız randevu ve gelişmiş finansal takip için Solo Pro planına dilediğiniz zaman geçebilirsiniz.'
            },
            {
                title: 'Hasta verilerim güvende mi?',
                content: 'Kesinlikle. Hasta ve iş verileriniz AES-256 ile şifrelenir ve TLS protokolleri üzerinden taşınır. KVKK ve GDPR gibi küresel standartlara tam uyumlu olarak verilerinizi asla üçüncü taraflara satmaz veya paylaşmayız.'
            },
            {
                title: 'Farklı cihazlarda (telefon/tablet) aynı anda kullanabilir miyim?',
                content: 'Ücretsiz plan tek cihaz üzerinden erişime izin verirken, Solo Pro planına sahipseniz hesabınıza giriş yaptığınız tüm cihazlar arasında randevu ve gelir/gider verileriniz anlık olarak ve güvenle eşitlenir.'
            },
            {
                title: 'Aboneliğimi nasıl iptal edebilirim?',
                content: 'Tüm ödeme ve abonelik işlemleri doğrudan Apple App Store veya Google Play Store altyapısı üzerinden güvenle gerçekleştirilir. Sahip olduğunuz aboneliği doğrudan telefonunuzun kendi Abonelikler/Hesap menüsünden istediğiniz zaman iptal edebilirsiniz.'
            }
        ]
    }
};

type Language = 'en' | 'tr';

export function LegalPage({ type, defaultLang = 'en' }: { type: 'terms' | 'privacy' | 'dpa' | 'faq'; defaultLang?: Language }) {
    const [lang, setLang] = useState<Language>(defaultLang);
    const navigate = useNavigate();

    const getContent = () => {
        if (type === 'terms') return termsContent[lang] || termsContent['en'];
        if (type === 'dpa') return (dpaContent as any)[lang] || dpaContent['en'];
        if (type === 'faq') return (faqContent as any)[lang] || faqContent['en'];
        return privacyContent[lang] || privacyContent['en'];
    };
    const contentSource = getContent();
    const intro = 'intro' in contentSource ? contentSource.intro : null;
    const showToggle = true;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                    </button>

                    {showToggle && (
                        <div className="inline-flex bg-slate-200/50 p-1 rounded-xl items-center border border-slate-200">
                            <Globe className="w-4 h-4 text-slate-400 ml-3 mr-2 shrink-0" />
                            <div className="flex bg-transparent">
                                <button
                                    onClick={() => setLang('en')}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${lang === 'en'
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    Global (EN)
                                </button>
                                <button
                                    onClick={() => setLang('tr')}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${lang === 'tr'
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    Türkiye (TR)
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{contentSource.title}</h1>
                    <p className="text-slate-500 mb-6 pb-6 border-b border-slate-100">
                        {lang === 'en' ? 'Last Updated: ' : 'Son Güncelleme: '}{contentSource.lastUpdated}
                    </p>

                    {intro && (
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-8 italic">
                            {intro}
                        </p>
                    )}

                    <div className="space-y-8">
                        {contentSource.sections.map((section: { title: string; content: string }, idx: number) => (
                            <div key={idx}>
                                <h2 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h2>
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
